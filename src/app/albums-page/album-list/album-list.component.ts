import {Component, Input, OnDestroy, OnInit, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {Album, SearchAlbumsResponse, TopAlbumsResponse} from '../../../util/interfaces';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit, OnDestroy, OnChanges {

  @Input() albums: Observable<TopAlbumsResponse | SearchAlbumsResponse> | undefined;
  @Output() likedNumberChangeEvent = new EventEmitter<Album>();
  albumList: Album[] = [];
  albumsSubscription: Subscription | undefined;

  constructor() { }

  ngOnInit(): void {
    this.albumsSubscription = this.albums?.subscribe((val) => {
      // @ts-ignore
      if (val.results !== undefined) {
        // @ts-ignore
        this.albumList = val.results.albummatches.album;
      }
      else {
        // @ts-ignore
        this.albumList = val.albums.album;
      }
    });
  }

  ngOnDestroy(): void {
    this.albumsSubscription?.unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('albums' in changes) {
      this.albums = changes.albums.currentValue;
    }
    this.albumsSubscription = this.albums?.subscribe((val) => {
      // @ts-ignore
      if (val.results !== undefined) {
        // @ts-ignore
        this.albumList = val.results.albummatches.album;
      }
      else {
        // @ts-ignore
        this.albumList = val.albums.album;
      }
    });
  }

  onToggleAlbum(albumData: Album): void {
    this.likedNumberChangeEvent.emit(albumData);
  }
}
