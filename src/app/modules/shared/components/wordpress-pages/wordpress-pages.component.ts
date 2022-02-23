import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IWpPage } from '../../interfaces/iwp-page.interface';
import { WordpressService } from '../../services/wordpress.service';

@Component({
  selector: 'app-wordpress-pages',
  templateUrl: './wordpress-pages.component.html',
  styleUrls: ['./wordpress-pages.component.scss']
})
export class WordpressPagesComponent implements OnInit {

  private wpPages: BehaviorSubject<IWpPage[]> = new BehaviorSubject<IWpPage[]>([]);
  wpPages$ = this.wpPages.asObservable();

  message: string = "";
  
  constructor(private WordpressService: WordpressService) { 
    this.WordpressService.getPages().subscribe(
      (pages: IWpPage[]) => {        
        this.wpPages.next(pages);
      }
      ,(error) => {
        this.message = error.message;
      });
  }

  ngOnInit(): void {
  }

}
