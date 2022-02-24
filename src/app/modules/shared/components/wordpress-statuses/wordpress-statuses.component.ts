import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IWpStatuses } from '../../interfaces/iwp-statuses.interface';
import { WordpressService } from '../../services/wordpress.service';

@Component({
  selector: 'app-wordpress-statuses',
  templateUrl: './wordpress-statuses.component.html',
  styleUrls: ['./wordpress-statuses.component.scss']
})
export class WordpressStatusesComponent implements OnInit {

  private wpStatuses: BehaviorSubject<IWpStatuses[]> = new BehaviorSubject<IWpStatuses[]>([]);
  wpStatuses$ = this.wpStatuses.asObservable();

  message: string = "";

  constructor(private WordpressService: WordpressService) { 
    this.WordpressService.getStatuses().subscribe(
      (statuses: IWpStatuses[]) => {        
        this.wpStatuses.next(statuses);
      }
    ,(error) => {
      this.message = error.message;
    });
  }

  ngOnInit(): void {
  }

}
