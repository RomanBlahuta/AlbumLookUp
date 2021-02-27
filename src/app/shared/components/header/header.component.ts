import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import {ICON_ACTIVE} from '../../../../util/consts';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {

  albumNameControl = new FormControl('');
  likedIcon = ICON_ACTIVE;

  @Input() likedCount = 0;
  @Output() albumNameInputEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {

    this.albumNameControl.valueChanges.pipe(debounceTime(750)).subscribe((albumName) => {
      this.albumNameInputEvent.emit(albumName);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('likedCount' in changes) {
      this.likedCount = Object.keys(localStorage).length;
    }
  }

}
