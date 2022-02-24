import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IWpMedia } from '../../interfaces/iwp-media.interface';
import { WordpressService } from '../../services/wordpress.service';

@Component({
  selector: 'app-wordpress-media',
  templateUrl: './wordpress-media.component.html',
  styleUrls: ['./wordpress-media.component.scss']
})
export class WordpressMediaComponent implements OnInit {

  private wpMedias: BehaviorSubject<IWpMedia[]> = new BehaviorSubject<IWpMedia[]>([]);
  wpMedias$ = this.wpMedias.asObservable();

  message: string = "";

  constructor(private WordpressService: WordpressService) { 
    this.WordpressService.getMedia().subscribe(
      (medias: IWpMedia[]) => {        
        this.wpMedias.next(medias);
      }
      ,(error) => {
        this.message = error.message;
      });
  }


  ngOnInit(): void {
  }

}
