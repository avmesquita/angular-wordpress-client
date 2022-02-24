import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { IWpTheme } from '../../interfaces/iwp-theme.interface';
import { WordpressService } from '../../services/wordpress.service';

@Component({
  selector: 'app-wordpress-themes',
  templateUrl: './wordpress-themes.component.html',
  styleUrls: ['./wordpress-themes.component.scss']
})
export class WordpressThemesComponent {

  private wpThemes: BehaviorSubject<IWpTheme[]> = new BehaviorSubject<IWpTheme[]>([]);
  wpThemes$ = this.wpThemes.asObservable();

  constructor(private _snackBar: MatSnackBar, private WordpressService: WordpressService) { 
    this.WordpressService.getThemes(1,100).subscribe( (counter) => {
      const totalPages = counter.headers.get('X-WP-TotalPages');
      const totalItems = counter.headers.get('X-WP-Total');
      this._snackBar.open('Found: ' + totalItems.toString(), 'Info');
      if (totalPages) {                              
        this.wpThemes.next([...this.wpThemes.getValue(), ...counter.body]);
        for (let i = 2; i <= totalPages; i++) {
          this.WordpressService.getThemes(i,100).subscribe(
            (dados: any) => {                
              this.wpThemes.next([...this.wpThemes.getValue(), ...dados.body]);
            });
          }
      }          
    },(error) => {
      this._snackBar.open(error.message, 'Error');
    });  
  }
}
