import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IWpComment } from '../../interfaces/iwp-comment.interface';
import { WordpressService } from '../../services/wordpress.service';

@Component({
  selector: 'app-wordpress-comments',
  templateUrl: './wordpress-comments.component.html',
  styleUrls: ['./wordpress-comments.component.scss']
})
export class WordpressCommentsComponent implements OnInit {

  private wpComments: BehaviorSubject<IWpComment[]> = new BehaviorSubject<IWpComment[]>([]);
  wpComments$ = this.wpComments.asObservable();

  message: string = "";
  
  constructor(private WordpressService: WordpressService) { 
    this.WordpressService.getComments().subscribe(
      (comments: IWpComment[]) => {        
        this.wpComments.next(comments);
      }
      ,(error) => {
        this.message = error.message;
      });
  }

  ngOnInit(): void {
  }

}
