import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IWpPost } from '../../interfaces/iwp-post.interface';
import { WordpressService } from '../../services/wordpress.service';

@Component({
  selector: 'app-wordpress-posts',
  templateUrl: './wordpress-posts.component.html',
  styleUrls: ['./wordpress-posts.component.scss']
})
export class WordpressPostsComponent implements OnInit {

  private wpPosts: BehaviorSubject<IWpPost[]> = new BehaviorSubject<IWpPost[]>([]);
  wpPosts$ = this.wpPosts.asObservable();

  constructor(private WordpressService: WordpressService) { 
    this.WordpressService.getPosts().subscribe(
      (posts: IWpPost[]) => {
        debugger
        this.wpPosts.next(posts);
      }
    );
  }

  ngOnInit(): void {

  }

}
