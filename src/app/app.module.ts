import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './shared/header/header.component';

import { AlbumsPageComponent } from './albums-page/albums-page.component';
import { AlbumListComponent } from './albums-page/album-list/album-list.component';
import { AlbumCardComponent } from './albums-page/album-card/album-card.component';

import { GenresPageComponent } from './genres-page/genres-page.component';
import { GenreListComponent } from './genres-page/genre-list/genre-list.component';
import { GenreCardComponent } from './genres-page/genre-card/genre-card.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
