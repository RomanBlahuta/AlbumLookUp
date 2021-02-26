import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {Album, TopAlbumsResponse} from '../../../util/interfaces';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit, OnDestroy {

  @Input() albums: Observable<TopAlbumsResponse> | undefined;
  albumList: Album[] = [];
  albumsSubscription: Subscription | undefined;

  constructor() { }

  ngOnInit(): void {
    this.albumsSubscription = this.albums?.subscribe((val) => {
      this.albumList = val.albums.album;
    });
  }

  ngOnDestroy(): void {
    this.albumsSubscription?.unsubscribe();
  }

}
