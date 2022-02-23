import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IWpCategory } from '../../interfaces/iwp-category.interface';
import { WordpressService } from '../../services/wordpress.service';


@Component({
  selector: 'app-wordpress-categories',
  templateUrl: './wordpress-categories.component.html',
  styleUrls: ['./wordpress-categories.component.scss']
})
export class WordpressCategoriesComponent implements OnInit {

  private wpCategories: BehaviorSubject<IWpCategory[]> = new BehaviorSubject<IWpCategory[]>([]);
  wpCategories$ = this.wpCategories.asObservable();

  message: string = "";
  
  constructor(private WordpressService: WordpressService) { 
    this.WordpressService.getCategories().subscribe(
      (categories: IWpCategory[]) => {        
        this.wpCategories.next(categories);
      }
      ,(error) => {
        this.message = error.message;
      });
  }

  ngOnInit(): void {
  }

}
