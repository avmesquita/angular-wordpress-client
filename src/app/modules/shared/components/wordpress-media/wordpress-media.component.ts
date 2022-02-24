import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IWpMedia } from '../../interfaces/iwp-media.interface';
import { WordpressService } from '../../services/wordpress.service';

@Component({
  selector: 'app-wordpress-media',
  templateUrl: './wordpress-media.component.html',
  styleUrls: ['./wordpress-media.component.scss']
})
export class WordpressMediaComponent {

  private wpMedias: BehaviorSubject<IWpMedia[]> = new BehaviorSubject<IWpMedia[]>([]);
  wpMedias$ = this.wpMedias.asObservable();

  message: string = "";

  constructor(private WordpressService: WordpressService) { 
    this.WordpressService.getMedia(1,100).subscribe( (counter) => {
      const totalPages = counter.headers.get('X-WP-TotalPages');
      if (totalPages) {                              
        for (let i = 1; i <= totalPages; i++) {
          this.WordpressService.getMedia(i,100).subscribe(
            (dados: any) => {                       
              this.wpMedias.next([...this.wpMedias.getValue(), ...dados.body]);
            });
          }
      }          
    },(error) => {
      this.message = error.message;
    });
  }
}
