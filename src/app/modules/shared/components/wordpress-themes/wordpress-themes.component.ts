import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IWpTheme } from '../../interfaces/iwp-theme.interface';
import { WordpressService } from '../../services/wordpress.service';

@Component({
  selector: 'app-wordpress-themes',
  templateUrl: './wordpress-themes.component.html',
  styleUrls: ['./wordpress-themes.component.scss']
})
export class WordpressThemesComponent implements OnInit {

  private wpThemes: BehaviorSubject<IWpTheme[]> = new BehaviorSubject<IWpTheme[]>([]);
  wpThemes$ = this.wpThemes.asObservable();

  message: string = "";
  
  constructor(private WordpressService: WordpressService) { 
    this.WordpressService.getThemes().subscribe(
      (themes: IWpTheme[]) => {        
        this.wpThemes.next(themes);
      }
      ,(error) => {
        this.message = error.message;
      });
  }

  ngOnInit(): void {
  }

}
