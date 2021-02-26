import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { composeRequestUrl } from '../../../../util/utils';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetTopAlbumsService {

  constructor(private http: HttpClient) { }

  getTopAlbumsByGenre(genre: string): Observable<any> {
    return this.http.get(composeRequestUrl(genre, environment.api_key));
  }
}
