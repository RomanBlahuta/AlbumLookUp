import { Component, OnInit } from '@angular/core';
import { Genre } from '../../util/interfaces';
import { GENRES } from '../../util/consts';

@Component({
  selector: 'app-genres-page',
  templateUrl: './genres-page.component.html',
  styleUrls: ['./genres-page.component.scss']
})
export class GenresPageComponent implements OnInit {

  genres: Genre[] = GENRES;

  constructor() { }

  ngOnInit(): void {
  }

}
