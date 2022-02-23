import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IWpPlugin } from '../../interfaces/iwp-plugin.interface';
import { WordpressService } from '../../services/wordpress.service';

@Component({
  selector: 'app-wordpress-plugins',
  templateUrl: './wordpress-plugins.component.html',
  styleUrls: ['./wordpress-plugins.component.scss']
})
export class WordpressPluginsComponent implements OnInit {

  private wpPlugins: BehaviorSubject<IWpPlugin[]> = new BehaviorSubject<IWpPlugin[]>([]);
  wpPlugins$ = this.wpPlugins.asObservable();

  constructor(private WordpressService: WordpressService) { 
    this.WordpressService.getPlugins().subscribe(
      (plugins: IWpPlugin[]) => {
        debugger
        this.wpPlugins.next(plugins);
      }
    );
  }


  ngOnInit(): void {
  }

}
