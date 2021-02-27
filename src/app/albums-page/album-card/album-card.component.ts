import {Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {Album} from '../../../util/interfaces';
import {DEFAULT_ALBUM_COVER, ICON_ACTIVE, ICON_INACTIVE} from '../../../util/consts';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss']
})
export class AlbumCardComponent implements OnInit, OnChanges {

  @Input() albumData!: Album;
  @Output() toggleAlbumEvent = new EventEmitter<Album>();

  mouseOnCard = false;
  liked = false;
  heartIcon = this.liked ? ICON_ACTIVE : ICON_INACTIVE;
  defaultAlbumCover = DEFAULT_ALBUM_COVER;

  constructor() { }

  ngOnInit(): void {
    this.liked = localStorage.getItem(this.albumData.name) !== null;
  }

  onMouseEnter(): void {
    this.mouseOnCard = true;
  }

  onMouseLeave(): void {
    this.mouseOnCard = false;
  }

  onLiked(): void {
    this.liked = !this.liked;
    this.heartIcon = this.liked ? ICON_ACTIVE : ICON_INACTIVE;

    if (this.liked) {
      localStorage.setItem(this.albumData.name, 'liked');
    } else {
      localStorage.removeItem(this.albumData.name);
    }

    this.toggleAlbumEvent.emit(this.albumData);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.liked = localStorage.getItem(this.albumData.name) !== null;
    this.heartIcon = this.liked ? ICON_ACTIVE : ICON_INACTIVE;
  }
}
