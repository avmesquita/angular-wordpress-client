import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { IWpSetting } from '../../interfaces/iwp-setting.interface';
import { WordpressService } from '../../services/wordpress.service';

@Component({
  selector: 'app-wordpress-settings',
  templateUrl: './wordpress-settings.component.html',
  styleUrls: ['./wordpress-settings.component.scss']
})
export class WordpressSettingsComponent {

  private wpSettings: BehaviorSubject<IWpSetting[]> = new BehaviorSubject<IWpSetting[]>([]);
  wpSettings$ = this.wpSettings.asObservable();

  constructor(private _snackBar: MatSnackBar, private WordpressService: WordpressService) { 
    this.WordpressService.getSettings(1,100).subscribe( (counter) => {
      const totalPages = counter.headers.get('X-WP-TotalPages');
      const totalItems = counter.headers.get('X-WP-Total');
      this._snackBar.open('Found: ' + totalItems.toString(), 'Info');
      if (totalPages) {                              
        this.wpSettings.next([...this.wpSettings.getValue(), ...counter.body]);
        for (let i = 2; i <= totalPages; i++) {
          this.WordpressService.getSettings(i,100).subscribe(
            (dados: any) => {                
              this.wpSettings.next([...this.wpSettings.getValue(), ...dados.body]);
            });
          }
      }          
    },(error) => {
      this._snackBar.open(error.message, 'Error');
    });  
  }
}
