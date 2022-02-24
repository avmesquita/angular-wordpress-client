import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IWpComment } from '../../interfaces/iwp-comment.interface';
import { WordpressService } from '../../services/wordpress.service';

@Component({
  selector: 'app-wordpress-comments',
  templateUrl: './wordpress-comments.component.html',
  styleUrls: ['./wordpress-comments.component.scss']
})
export class WordpressCommentsComponent {

  private wpComments: BehaviorSubject<IWpComment[]> = new BehaviorSubject<IWpComment[]>([]);
  wpComments$ = this.wpComments.asObservable();

  message: string = "";
  
  constructor(private WordpressService: WordpressService) { 
    this.WordpressService.getComments(1,100).subscribe( (counter) => {
      const totalPages = counter.headers.get('X-WP-TotalPages');
      if (totalPages) {                              
        for (let i = 1; i <= totalPages; i++) {
          this.WordpressService.getComments(i,100).subscribe(
            (dados: any) => {                
              this.wpComments.next([...this.wpComments.getValue(), ...dados.body]);
            });
          }
      }          
    },(error) => {
      this.message = error.message;
    });  
  }
}
