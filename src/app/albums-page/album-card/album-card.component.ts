import {Component, Input, OnInit} from '@angular/core';
import {Album} from '../../../util/interfaces';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss']
})
export class AlbumCardComponent implements OnInit {

  @Input() albumData!: Album;

  mouseOnCard = false;
  liked = false;
  heartIcon = this.liked ? 'favorite' : 'favorite_border';

  constructor() { }

  ngOnInit(): void {
  }

  onMouseEnter(): void {
    this.mouseOnCard = true;
  }

  onMouseLeave(): void {
    this.mouseOnCard = false;
  }

  onLiked(): void {
    this.liked = !this.liked;
    this.heartIcon = this.liked ? 'favorite' : 'favorite_border';
  }

}
