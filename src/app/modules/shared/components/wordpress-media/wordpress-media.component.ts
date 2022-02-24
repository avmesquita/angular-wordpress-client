import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { IWpMedia } from '../../interfaces/iwp-media.interface';
import { WordpressService } from '../../services/wordpress.service';

@Component({
  selector: 'app-wordpress-media',
  templateUrl: './wordpress-media.component.html',
  styleUrls: ['./wordpress-media.component.scss']
})
export class WordpressMediaComponent {

  private wpMedias: BehaviorSubject<IWpMedia[]> = new BehaviorSubject<IWpMedia[]>([]);
  wpMedias$ = this.wpMedias.asObservable();

  constructor(private _snackBar: MatSnackBar, private WordpressService: WordpressService) { 
    this.WordpressService.getMedia(1,100).subscribe( (counter) => {
      const totalPages = counter.headers.get('X-WP-TotalPages');
      const totalItems = counter.headers.get('X-WP-Total');
      this._snackBar.open('Found: ' + totalItems.toString(), 'Info');
      if (totalPages) {                              
        this.wpMedias.next([...this.wpMedias.getValue(), ...counter.body]);
        for (let i = 2; i <= totalPages; i++) {
          this.WordpressService.getMedia(i,100).subscribe(
            (dados: any) => {                       
              this.wpMedias.next([...this.wpMedias.getValue(), ...dados.body]);
            });
          }
      }          
    },(error) => {
      this._snackBar.open(error.message, 'Error');
    });
  }
}
