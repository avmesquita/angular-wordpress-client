import { Component } from '@angular/core';
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

  message: string = "";
  
  constructor(private WordpressService: WordpressService) { 
    this.WordpressService.getThemes(1,100).subscribe( (counter) => {
      const totalPages = counter.headers.get('X-WP-TotalPages');
      if (totalPages) {                              
        for (let i = 1; i <= totalPages; i++) {
          this.WordpressService.getThemes(i,100).subscribe(
            (dados: any) => {                
              this.wpThemes.next([...this.wpThemes.getValue(), ...dados.body]);
            });
          }
      }          
    },(error) => {
      this.message = error.message;
    });  
  }
}
