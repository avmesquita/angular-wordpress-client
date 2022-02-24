import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { IWpPage } from '../../interfaces/iwp-page.interface';
import { WordpressService } from '../../services/wordpress.service';

@Component({
  selector: 'app-wordpress-pages',
  templateUrl: './wordpress-pages.component.html',
  styleUrls: ['./wordpress-pages.component.scss']
})
export class WordpressPagesComponent {

  private wpPages: BehaviorSubject<IWpPage[]> = new BehaviorSubject<IWpPage[]>([]);
  wpPages$ = this.wpPages.asObservable();

  constructor(private _snackBar: MatSnackBar, private WordpressService: WordpressService) { 
    this.WordpressService.getPages(1,100).subscribe( (counter) => {
      const totalPages = counter.headers.get('X-WP-TotalPages');
      const totalItems = counter.headers.get('X-WP-Total');
      this._snackBar.open('Found: ' + totalItems.toString(), 'Info');
      if (totalPages) {                              
        this.wpPages.next([...this.wpPages.getValue(), ...counter.body]);
        for (let i = 2; i <= totalPages; i++) {
          this.WordpressService.getPages(i,100).subscribe(
            (dados: any) => {                
              this.wpPages.next([...this.wpPages.getValue(), ...dados.body]);
            });
          }
      }          
    },(error) => {
      this._snackBar.open(error.message, 'Error');
    });  
  }
}
