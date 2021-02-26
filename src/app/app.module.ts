import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './shared/components/header/header.component';

import { AlbumsPageComponent } from './albums-page/albums-page.component';
import { AlbumListComponent } from './albums-page/album-list/album-list.component';
import { AlbumCardComponent } from './albums-page/album-card/album-card.component';

import { GenresPageComponent } from './genres-page/genres-page.component';
import { GenreListComponent } from './genres-page/genre-list/genre-list.component';
import { GenreCardComponent } from './genres-page/genre-card/genre-card.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import {HttpClientModule} from '@angular/common/http';
import {GetTopAlbumsService} from './shared/services/get-top-albums/get-top-albums.service';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GenresPageComponent,
    AlbumsPageComponent,
    PageNotFoundComponent,
    GenreListComponent,
    GenreCardComponent,
    HeaderComponent,
    AlbumCardComponent,
    AlbumListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatBadgeModule,
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [GetTopAlbumsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
