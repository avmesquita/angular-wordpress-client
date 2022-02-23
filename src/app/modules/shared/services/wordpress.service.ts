import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WordpressService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    return this.http.get( environment.wordpressUrl + environment.wpPosts + "?per_page=100" );
  }

  getCategories(): Observable<any> {
    return this.http.get( environment.wordpressUrl + environment.wpCategories + "?per_page=100" );
  }

  getTags(): Observable<any> {
    return this.http.get( environment.wordpressUrl + environment.wpTags + "?per_page=100" );
  }

  getPages(): Observable<any> {
    return this.http.get( environment.wordpressUrl + environment.wpPages + "?per_page=100" );
  }

  getComments(): Observable<any> {
    return this.http.get( environment.wordpressUrl + environment.wpComments + "?per_page=100" );
  }

  getTaxonomies(): Observable<any> {
    return this.http.get( environment.wordpressUrl + environment.wpTaxonomies + "?per_page=100" );
  }

  getMedia(): Observable<any> {
    return this.http.get( environment.wordpressUrl + environment.wpMedia );
  }

  getTypes(): Observable<any> {
    return this.http.get( environment.wordpressUrl + environment.wpTypes );
  }

  getStatuses(): Observable<any> {
    return this.http.get( environment.wordpressUrl + environment.wpStatuses );
  }

  getBlockRenderer(): Observable<any> {
    return this.http.get( environment.wordpressUrl + environment.wpBlockRenderer );
  }

  getBlockDirectoryItems(): Observable<any> {
    return this.http.get( environment.wordpressUrl + environment.wpBlockDirectoryItems );
  }

  getSearchPosts(query: string): Observable<any> {
    return this.http.get( environment.wordpressUrl + environment.wpPosts + '?search=' + query );
  }

  /* NEEDS AUTHORIZATION */

  getPlugins(): Observable<any> {
    return this.http.get( environment.wordpressUrl + environment.wpPlugins );
  }

  getSettings(): Observable<any> {
    return this.http.get( environment.wordpressUrl + environment.wpSettings );
  }

  getThemes(): Observable<any> {
    return this.http.get( environment.wordpressUrl + environment.wpThemes );
  }

  getUsers(): Observable<any> {
    return this.http.get( environment.wordpressUrl + environment.wpUsers );
  }


}
