import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WordpressService {

  private url: string = environment.wordpressUrl + environment.wordpressServicePathUrl;
   
  constructor(private http: HttpClient) { 
    
  }

  getPosts(page: number = 1, records: number = 100): Observable<any> {
    const paging = "?page=" + page.toString() + "&per_page=" + records.toString();
    return this.http.get( this.url + environment.wpPosts + paging, { observe: 'response' });
  }

  getCategories(page: number = 1, records: number = 100): Observable<any> {
    const paging = "?page=" + page.toString() + "&per_page=" + records.toString();
    return this.http.get( this.url + environment.wpCategories + paging, { observe: 'response' } );
  }

  getTags(page: number = 1, records: number = 100): Observable<any> {
    const paging = "?page=" + page.toString() + "&per_page=" + records.toString();
    return this.http.get( this.url + environment.wpTags + paging, { observe: 'response' });
  }

  getPages(page: number = 1, records: number = 100): Observable<any> {
    const paging = "?page=" + page.toString() + "&per_page=" + records.toString();
    return this.http.get( this.url + environment.wpPages + paging, { observe: 'response' });
  }

  getComments(page: number = 1, records: number = 100): Observable<any> {
    const paging = "?page=" + page.toString() + "&per_page=" + records.toString();
    return this.http.get( this.url + environment.wpComments + paging, { observe: 'response' });
  }

  getTaxonomies(page: number = 1, records: number = 100): Observable<any> {
    const paging = "?page=" + page.toString() + "&per_page=" + records.toString();
    return this.http.get( this.url + environment.wpTaxonomies + paging, { observe: 'response' });
  }

  getMedia(page: number = 1, records: number = 100): Observable<any> {
    const paging = "?page=" + page.toString() + "&per_page=" + records.toString();
    return this.http.get( this.url + environment.wpMedia + paging, { observe: 'response' });
  }

  getTypes(page: number = 1, records: number = 100): Observable<any> {
    const paging = "?page=" + page.toString() + "&per_page=" + records.toString();
    return this.http.get( this.url + environment.wpTypes + paging, { observe: 'response' });
  }

  getStatuses(page: number = 1, records: number = 100): Observable<any> {
    const paging = "?page=" + page.toString() + "&per_page=" + records.toString();
    return this.http.get( this.url + environment.wpStatuses + paging, { observe: 'response' });
  }

  getBlockRenderer(page: number = 1, records: number = 100): Observable<any> {
    const paging = "?page=" + page.toString() + "&per_page=" + records.toString();
    return this.http.get( this.url + environment.wpBlockRenderer + paging, { observe: 'response' });
  }

  getBlockDirectoryItems(page: number = 1, records: number = 100): Observable<any> {
    const paging = "?page=" + page.toString() + "&per_page=" + records.toString();
    return this.http.get( this.url + environment.wpBlockDirectoryItems + paging, { observe: 'response' });
  }

  getSearchPosts(query: string): Observable<any> {    
    return this.http.get( this.url + environment.wpPosts + '?search=' + query );
  }

  /* NEEDS AUTHORIZATION */

  getPlugins(page: number = 1, records: number = 100): Observable<any> {
    const paging = "?page=" + page.toString() + "&per_page=" + records.toString();
    return this.http.get( this.url + environment.wpPlugins + paging, { observe: 'response' });
  }

  getSettings(page: number = 1, records: number = 100): Observable<any> {
    const paging = "?page=" + page.toString() + "&per_page=" + records.toString();
    return this.http.get( this.url + environment.wpSettings + paging, { observe: 'response' });
  }

  getThemes(page: number = 1, records: number = 100): Observable<any> {
    const paging = "?page=" + page.toString() + "&per_page=" + records.toString();
    return this.http.get( this.url + environment.wpThemes + paging, { observe: 'response' });
  }

  getUsers(page: number = 1, records: number = 100): Observable<any> {
    const paging = "?page=" + page.toString() + "&per_page=" + records.toString();
    return this.http.get( this.url + environment.wpUsers + paging, { observe: 'response' });
  }


}
