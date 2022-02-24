import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { IWpType } from '../../interfaces/iwp-type.interface';
import { WordpressService } from '../../services/wordpress.service';

@Component({
  selector: 'app-wordpress-types',
  templateUrl: './wordpress-types.component.html',
  styleUrls: ['./wordpress-types.component.scss']
})
export class WordpressTypesComponent {

  private wpTypes: BehaviorSubject<IWpType[]> = new BehaviorSubject<IWpType[]>([]);
  wpTypes$ = this.wpTypes.asObservable();

  constructor(private _snackBar: MatSnackBar, private WordpressService: WordpressService) { 
    this.WordpressService.getTypes(1,100).subscribe( (counter) => {
      const totalPages = counter.headers.get('X-WP-TotalPages');
      const totalItems = counter.headers.get('X-WP-Total');
      this._snackBar.open('Found: ' + totalItems.toString(), 'Info');
      if (totalPages) {                              
        this.wpTypes.next([...this.wpTypes.getValue(), ...counter.body]);
        for (let i = 2; i <= totalPages; i++) {
          this.WordpressService.getTypes(i,100).subscribe(
            (dados: any) => {                
              this.wpTypes.next([...this.wpTypes.getValue(), ...dados.body]);
            });
          }
      }          
    },(error) => {
      this._snackBar.open(error.message, 'Error');
    });  
  }
}
