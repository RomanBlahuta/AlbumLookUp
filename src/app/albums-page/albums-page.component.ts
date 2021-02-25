import { Component, OnInit } from '@angular/core';
import {GetTopAlbumsService} from '../shared/services/get-top-albums/get-top-albums.service';
import {Observable} from 'rxjs';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-albums-page',
  templateUrl: './albums-page.component.html',
  styleUrls: ['./albums-page.component.scss']
})
export class AlbumsPageComponent implements OnInit {

  albums: Observable<any> | undefined;
  currentGenre = '';

  constructor(private albumsService: GetTopAlbumsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.currentGenre = params.genre;
    });
    this.albums = this.albumsService.getTopAlbumsByGenre('rock');
    console.log(this.albums);
  }

}
