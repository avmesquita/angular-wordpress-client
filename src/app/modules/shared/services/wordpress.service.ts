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
    return this.http.get( environment.wordpressUrl + environment.wpPosts );
  }

  getUsers(): Observable<any> {
    return this.http.get( environment.wordpressUrl + environment.wpUsers );
  }

  getCategories(): Observable<any> {
    return this.http.get( environment.wordpressUrl + environment.wpCategories );
  }

  getTags(): Observable<any> {
    return this.http.get( environment.wordpressUrl + environment.wpTags );
  }

  getPages(): Observable<any> {
    return this.http.get( environment.wordpressUrl + environment.wpPages );
  }

  getComments(): Observable<any> {
    return this.http.get( environment.wordpressUrl + environment.wpComments );
  }

  getTaxonomies(): Observable<any> {
    return this.http.get( environment.wordpressUrl + environment.wpTaxonomies );
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

  getSettings(): Observable<any> {
    return this.http.get( environment.wordpressUrl + environment.wpSettings );
  }

  getThemes(): Observable<any> {
    return this.http.get( environment.wordpressUrl + environment.wpThemes );
  }

  getBlockRenderer(): Observable<any> {
    return this.http.get( environment.wordpressUrl + environment.wpBlockRenderer );
  }

  getBlockDirectoryItems(): Observable<any> {
    return this.http.get( environment.wordpressUrl + environment.wpBlockDirectoryItems );
  }

  getPlugins(): Observable<any> {
    return this.http.get( environment.wordpressUrl + environment.wpPlugins );
  }

}
