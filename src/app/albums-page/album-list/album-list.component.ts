import {Component, Input, OnDestroy, OnInit, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {Album, SearchAlbumsResponse, TopAlbumsResponse} from '../../../util/interfaces';
import {GetTopAlbumsService} from '../../shared/services/get-top-albums/get-top-albums.service';
import {ActivatedRoute, Params} from '@angular/router';

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
  paramsSubscription: Subscription | undefined;
  currentGenre = '';

  constructor(private albumsService: GetTopAlbumsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      this.currentGenre = params.genre;
    });

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
      this.albumsSubscription?.unsubscribe();
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
  }

  onToggleAlbum(albumData: Album): void {
    this.likedNumberChangeEvent.emit(albumData);
  }
}
