import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  constructor(private _snackBar: MatSnackBar, private WordpressService: WordpressService) { 
    this.WordpressService.getComments(1,100).subscribe( (counter) => {
      const totalPages = counter.headers.get('X-WP-TotalPages');
      const totalItems = counter.headers.get('X-WP-Total');
      this._snackBar.open('Found: ' + totalItems.toString(), 'Info');
      if (totalPages) {                              
        this.wpComments.next([...this.wpComments.getValue(), ...counter.body]);
        for (let i = 2; i <= totalPages; i++) {
          this.WordpressService.getComments(i,100).subscribe(
            (dados: any) => {                
              this.wpComments.next([...this.wpComments.getValue(), ...dados.body]);
            });
          }
      }          
    },(error) => {
      this._snackBar.open(error.message, 'Error');
    });  
  }
}
