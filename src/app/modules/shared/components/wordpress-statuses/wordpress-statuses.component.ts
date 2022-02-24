import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { IWpStatuses } from '../../interfaces/iwp-statuses.interface';
import { WordpressService } from '../../services/wordpress.service';

@Component({
  selector: 'app-wordpress-statuses',
  templateUrl: './wordpress-statuses.component.html',
  styleUrls: ['./wordpress-statuses.component.scss']
})
export class WordpressStatusesComponent {

  private wpStatuses: BehaviorSubject<IWpStatuses[]> = new BehaviorSubject<IWpStatuses[]>([]);
  wpStatuses$ = this.wpStatuses.asObservable();

  constructor(private _snackBar: MatSnackBar, private WordpressService: WordpressService) { 
    this.WordpressService.getStatuses(1,100).subscribe( (counter) => {
      const totalPages = counter.headers.get('X-WP-TotalPages');
      const totalItems = counter.headers.get('X-WP-Total');
      this._snackBar.open('Found: ' + totalItems.toString(), 'Info');
      if (totalPages) {                              
        this.wpStatuses.next([...this.wpStatuses.getValue(), ...counter.body]);
        for (let i = 2; i <= totalPages; i++) {
          this.WordpressService.getStatuses(i,100).subscribe(
            (dados: any) => {                
              this.wpStatuses.next([...this.wpStatuses.getValue(), ...dados.body]);
            });
          }
      }          
    },(error) => {
      this._snackBar.open(error.message, 'Error');
    });  
  }
}
