import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IWpPlugin } from '../../interfaces/iwp-plugin.interface';
import { WordpressService } from '../../services/wordpress.service';

@Component({
  selector: 'app-wordpress-plugins',
  templateUrl: './wordpress-plugins.component.html',
  styleUrls: ['./wordpress-plugins.component.scss']
})
export class WordpressPluginsComponent {

  private wpPlugins: BehaviorSubject<IWpPlugin[]> = new BehaviorSubject<IWpPlugin[]>([]);
  wpPlugins$ = this.wpPlugins.asObservable();

  message: string = "";
  
  constructor(private WordpressService: WordpressService) { 
    this.WordpressService.getPlugins(1,100).subscribe( (counter) => {
      const totalPages = counter.headers.get('X-WP-TotalPages');
      if (totalPages) {                              
        this.wpPlugins.next([...this.wpPlugins.getValue(), ...counter.body]);
        for (let i = 2; i <= totalPages; i++) {
          this.WordpressService.getPlugins(i,100).subscribe(
            (dados: any) => {                
              this.wpPlugins.next([...this.wpPlugins.getValue(), ...dados.body]);
            });
          }
      }          
    },(error) => {
      this.message = error.message;
    })
  }  
}
