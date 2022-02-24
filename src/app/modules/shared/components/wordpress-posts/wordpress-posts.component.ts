import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { IWpPost } from '../../interfaces/iwp-post.interface';
import { WordpressService } from '../../services/wordpress.service';

@Component({
  selector: 'app-wordpress-posts',
  templateUrl: './wordpress-posts.component.html',
  styleUrls: ['./wordpress-posts.component.scss']
})
export class WordpressPostsComponent {

  private wpPosts: BehaviorSubject<IWpPost[]> = new BehaviorSubject<IWpPost[]>([]);
  wpPosts$ = this.wpPosts.asObservable();

  constructor(private _snackBar: MatSnackBar, private WordpressService: WordpressService) { 
    this.WordpressService.getPosts(1,100).subscribe( (counter) => {
      const totalPages = counter.headers.get('X-WP-TotalPages');
      const totalItems = counter.headers.get('X-WP-Total');
      this._snackBar.open('Found: ' + totalItems.toString(), 'Info');
      if (totalPages) {                              
        this.wpPosts.next([...this.wpPosts.getValue(), ...counter.body]);
        for (let i = 2; i <= totalPages; i++) {
          this.WordpressService.getPosts(i,100).subscribe(
            (dados: any) => {                
              this.wpPosts.next([...this.wpPosts.getValue(), ...dados.body]);
            });
          }
      }          
    },(error) => {
      this._snackBar.open(error.message, 'Error');
    });  
  }
}
