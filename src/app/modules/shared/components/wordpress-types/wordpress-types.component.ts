import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IWpType } from '../../interfaces/iwp-type.interface';
import { WordpressService } from '../../services/wordpress.service';

@Component({
  selector: 'app-wordpress-types',
  templateUrl: './wordpress-types.component.html',
  styleUrls: ['./wordpress-types.component.scss']
})
export class WordpressTypesComponent implements OnInit {

  private wpTypes: BehaviorSubject<IWpType[]> = new BehaviorSubject<IWpType[]>([]);
  wpTypes$ = this.wpTypes.asObservable();

  message: string = ""
  
  constructor(private WordpressService: WordpressService) { 
    this.WordpressService.getTypes().subscribe(
      (types: IWpType[]) => {        
        this.wpTypes.next(types);
      }
      ,(error) => {
        this.message = error.message;
      });
  }

  ngOnInit(): void {
  }

}
