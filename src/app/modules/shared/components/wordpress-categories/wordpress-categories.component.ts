import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { IWpCategory } from '../../interfaces/iwp-category.interface';
import { WordpressService } from '../../services/wordpress.service';

@Component({
  selector: 'app-wordpress-categories',
  templateUrl: './wordpress-categories.component.html',
  styleUrls: ['./wordpress-categories.component.scss']
})
export class WordpressCategoriesComponent {

  private wpCategories: BehaviorSubject<IWpCategory[]> = new BehaviorSubject<IWpCategory[]>([]);
  wpCategories$ = this.wpCategories.asObservable();

  constructor(private _snackBar: MatSnackBar, private WordpressService: WordpressService) { 
    this.WordpressService.getCategories(1,100).subscribe( (counter) => {
      const totalPages = counter.headers.get('X-WP-TotalPages');
      const totalItems = counter.headers.get('X-WP-Total');
      this._snackBar.open('Found: ' + totalItems.toString(), 'Info');
      if (totalPages) {     
        this.wpCategories.next([...this.wpCategories.getValue(), ...counter.body]);                   
        for (let i = 2; i <= totalPages; i++) {
          this.WordpressService.getCategories(i,100).subscribe(
            (dados: any) => {                         
              this.wpCategories.next([...this.wpCategories.getValue(), ...dados.body]);
            });
          }
      }          
    },(error) => {
      this._snackBar.open(error.message, 'Error');
    });  
  }

}
