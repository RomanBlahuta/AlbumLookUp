import {Component, OnInit, OnDestroy} from '@angular/core';
import {GetTopAlbumsService} from '../shared/services/get-top-albums/get-top-albums.service';
import {Observable, Subscription} from 'rxjs';
import {ActivatedRoute, Params} from '@angular/router';
import {Album, TopAlbumsResponse} from '../../util/interfaces';

@Component({
  selector: 'app-albums-page',
  templateUrl: './albums-page.component.html',
  styleUrls: ['./albums-page.component.scss']
})
export class AlbumsPageComponent implements OnInit, OnDestroy {

  albums: Observable<TopAlbumsResponse> | undefined;
  currentGenre = '';
  paramsSubscription: Subscription | undefined;
  likedCount = 0;

  constructor(private albumsService: GetTopAlbumsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      this.currentGenre = params.genre;
    });

    this.albums = this.albumsService.getTopAlbumsByGenre(this.currentGenre);
  }

  ngOnDestroy(): void {
    this.paramsSubscription?.unsubscribe();
  }

  onLikedNumberChange(): void {
    this.likedCount = Object.keys(localStorage).length;
  }
}
