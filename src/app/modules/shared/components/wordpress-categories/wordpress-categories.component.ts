import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IWpCategory } from '../../interfaces/iwp-category.interface';
import { WordpressService } from '../../services/wordpress.service';

@Component({
  selector: 'app-wordpress-categories',
  templateUrl: './wordpress-categories.component.html',
  styleUrls: ['./wordpress-categories.component.scss']
})
export class WordpressCategoriesComponent {

  private wpCategories: BehaviorSubject<IWpCategory[]> = new BehaviorSubject<IWpCategory[]>([]);
  wpCategories$ = this.wpCategories.asObservable();

  message: string = "";
  
  constructor(private WordpressService: WordpressService) { 
    this.WordpressService.getCategories(1,100).subscribe( (counter) => {
      const totalPages = counter.headers.get('X-WP-TotalPages');
      if (totalPages) {     
        this.wpCategories.next([...this.wpCategories.getValue(), ...counter.body]);                   
        for (let i = 2; i <= totalPages; i++) {
          this.WordpressService.getCategories(i,100).subscribe(
            (dados: any) => {                         
              this.wpCategories.next([...this.wpCategories.getValue(), ...dados.body]);
            });
          }
      }          
    },(error) => {
      this.message = error.message;
    });  
  }

}
