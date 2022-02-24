import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IWpPost } from '../../interfaces/iwp-post.interface';
import { IWpMedia } from '../../interfaces/iwp-media.interface';
import { WordpressService } from '../../services/wordpress.service';

@Component({
  selector: 'app-wordpress-posts',
  templateUrl: './wordpress-posts.component.html',
  styleUrls: ['./wordpress-posts.component.scss']
})
export class WordpressPostsComponent implements OnInit {

  private wpPosts: BehaviorSubject<IWpPost[]> = new BehaviorSubject<IWpPost[]>([]);
  wpPosts$ = this.wpPosts.asObservable();

  message: string = "";
  
  constructor(private WordpressService: WordpressService) { 
    this.WordpressService.getPosts(1,100).subscribe( (posts) => {
      const totalPages = posts.headers.get('X-WP-TotalPages');
      if (totalPages) {                              
        for (let i = 1; i <= totalPages; i++) {
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

  ngOnInit(): void {

  }

}
