import { Component } from '@angular/core';
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

  message: string = "";
  
  constructor(private WordpressService: WordpressService) { 
    this.WordpressService.getPosts(1,100).subscribe( (counter) => {
      const totalPages = counter.headers.get('X-WP-TotalPages');
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
      this.message = error.message;
    });  
  }
}
