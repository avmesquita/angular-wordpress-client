import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IWpTag } from '../../interfaces/iwp-tag.interface';
import { WordpressService } from '../../services/wordpress.service';

@Component({
  selector: 'app-wordpress-tags',
  templateUrl: './wordpress-tags.component.html',
  styleUrls: ['./wordpress-tags.component.scss']
})
export class WordpressTagsComponent {

  private wpTags: BehaviorSubject<IWpTag[]> = new BehaviorSubject<IWpTag[]>([]);
  wpTags$ = this.wpTags.asObservable();

  message: string = "";
  
  constructor(private WordpressService: WordpressService) { 

    this.WordpressService.getTags(1,100).subscribe( (counter) => {
      const totalPages = counter.headers.get('X-WP-TotalPages');
      if (totalPages) {                              
        for (let i = 1; i <= totalPages; i++) {
          this.WordpressService.getTags(i,100).subscribe(
            (dados: any) => {              
              this.wpTags.next([...this.wpTags.getValue(), ...dados.body]);
            });
          }
      }          
    },(error) => {
      this.message = error.message;
    });  
  }

}
