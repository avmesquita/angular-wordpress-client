import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IWpStatuses } from '../../interfaces/iwp-statuses.interface';
import { WordpressService } from '../../services/wordpress.service';

@Component({
  selector: 'app-wordpress-statuses',
  templateUrl: './wordpress-statuses.component.html',
  styleUrls: ['./wordpress-statuses.component.scss']
})
export class WordpressStatusesComponent {

  private wpStatuses: BehaviorSubject<IWpStatuses[]> = new BehaviorSubject<IWpStatuses[]>([]);
  wpStatuses$ = this.wpStatuses.asObservable();

  message: string = "";

  constructor(private WordpressService: WordpressService) { 
    this.WordpressService.getStatuses(1,100).subscribe( (counter) => {
      const totalPages = counter.headers.get('X-WP-TotalPages');
      if (totalPages) {                              
        for (let i = 1; i <= totalPages; i++) {
          this.WordpressService.getStatuses(i,100).subscribe(
            (dados: any) => {                
              this.wpStatuses.next([...this.wpStatuses.getValue(), ...dados.body]);
            });
          }
      }          
    },(error) => {
      this.message = error.message;
    });  
  }
}
