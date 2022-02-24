import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { IWpTag } from '../../interfaces/iwp-tag.interface';
import { WordpressService } from '../../services/wordpress.service';

@Component({
  selector: 'app-wordpress-tags',
  templateUrl: './wordpress-tags.component.html',
  styleUrls: ['./wordpress-tags.component.scss']
})
export class WordpressTagsComponent {

  private wpTags: BehaviorSubject<IWpTag[]> = new BehaviorSubject<IWpTag[]>([]);
  wpTags$ = this.wpTags.asObservable();

  constructor(private _snackBar: MatSnackBar, private WordpressService: WordpressService) { 

    this.WordpressService.getTags(1,100).subscribe( (counter) => {
      const totalPages = counter.headers.get('X-WP-TotalPages');
      const totalItems = counter.headers.get('X-WP-Total');
      this._snackBar.open('Found: ' + totalItems.toString(), 'Info');
      if (totalPages) {                              
        this.wpTags.next([...this.wpTags.getValue(), ...counter.body]);
        for (let i = 2; i <= totalPages; i++) {
          this.WordpressService.getTags(i,100).subscribe(
            (dados: any) => {              
              this.wpTags.next([...this.wpTags.getValue(), ...dados.body]);
            });
          }
      }          
    },(error) => {
      this._snackBar.open(error.message, 'Error');
    });  
  }

}
