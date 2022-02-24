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
    this.WordpressService.getPages(1,100).subscribe( (pages) => {
      const totalPages = pages.headers.get('X-WP-TotalPages');
      if (totalPages) {                              
        for (let i = 1; i <= totalPages; i++) {
          this.WordpressService.getPages(i,100).subscribe(
            (dados: any) => {                
              this.wpPages.next([...this.wpPages.getValue(), ...dados.body]);
            });
          }
      }          
    },(error) => {
      this.message = error.message;
    });  
  }

  ngOnInit(): void {
  }

}
