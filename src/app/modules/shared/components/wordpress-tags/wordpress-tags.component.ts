import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IWpTag } from '../../interfaces/iwp-tag.interface';
import { WordpressService } from '../../services/wordpress.service';

@Component({
  selector: 'app-wordpress-tags',
  templateUrl: './wordpress-tags.component.html',
  styleUrls: ['./wordpress-tags.component.scss']
})
export class WordpressTagsComponent implements OnInit {

  private wpTags: BehaviorSubject<IWpTag[]> = new BehaviorSubject<IWpTag[]>([]);
  wpTags$ = this.wpTags.asObservable();

  message: string = "";
  
  constructor(private WordpressService: WordpressService) { 
    this.WordpressService.getTags().subscribe(
      (tags: IWpTag[]) => {        
        this.wpTags.next(tags);
      }
      ,(error) => {
        this.message = error.message;
      });
  }

  ngOnInit(): void {
  }

}
