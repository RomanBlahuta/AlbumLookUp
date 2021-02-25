import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-genre-card',
  templateUrl: './genre-card.component.html',
  styleUrls: ['./genre-card.component.scss']
})
export class GenreCardComponent implements OnInit {

  @Input() genre = 'Genre';
  @Input() color = 'transparent';
  @Input() genreRoute = '';

  constructor() { }

  ngOnInit(): void {
  }

}
