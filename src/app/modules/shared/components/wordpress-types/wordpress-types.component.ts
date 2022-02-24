import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IWpType } from '../../interfaces/iwp-type.interface';
import { WordpressService } from '../../services/wordpress.service';

@Component({
  selector: 'app-wordpress-types',
  templateUrl: './wordpress-types.component.html',
  styleUrls: ['./wordpress-types.component.scss']
})
export class WordpressTypesComponent {

  private wpTypes: BehaviorSubject<IWpType[]> = new BehaviorSubject<IWpType[]>([]);
  wpTypes$ = this.wpTypes.asObservable();

  message: string = ""
  
  constructor(private WordpressService: WordpressService) { 
    this.WordpressService.getTypes(1,100).subscribe( (counter) => {
      const totalPages = counter.headers.get('X-WP-TotalPages');
      if (totalPages) {                              
        this.wpTypes.next([...this.wpTypes.getValue(), ...counter.body]);
        for (let i = 2; i <= totalPages; i++) {
          this.WordpressService.getTypes(i,100).subscribe(
            (dados: any) => {                
              this.wpTypes.next([...this.wpTypes.getValue(), ...dados.body]);
            });
          }
      }          
    },(error) => {
      this.message = error.message;
    });  
  }
}
