import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GenresPageComponent} from './genres-page/genres-page.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AlbumsPageComponent} from './albums-page/albums-page.component';

const routes: Routes = [
  {path: 'genres', component: GenresPageComponent},
  {path: 'genres/:genre', component: AlbumsPageComponent},
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '',   redirectTo: 'genres', pathMatch: 'full'},
  {path: '**',   redirectTo: 'not-found', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
