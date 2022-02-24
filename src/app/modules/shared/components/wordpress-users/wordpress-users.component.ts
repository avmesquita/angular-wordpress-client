import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IWpUser } from '../../interfaces/iwp-user.interface';
import { WordpressService } from '../../services/wordpress.service';

@Component({
  selector: 'app-wordpress-users',
  templateUrl: './wordpress-users.component.html',
  styleUrls: ['./wordpress-users.component.scss']
})
export class WordpressUsersComponent {
  
  private wpUsers: BehaviorSubject<IWpUser[]> = new BehaviorSubject<IWpUser[]>([]);
  wpUsers$ = this.wpUsers.asObservable();

  message: string = "";

  constructor(private WordpressService: WordpressService) { 
    this.WordpressService.getUsers(1,100).subscribe( (counter) => {
      const totalPages = counter.headers.get('X-WP-TotalPages');
      if (totalPages) {                              
        for (let i = 1; i <= totalPages; i++) {
          this.WordpressService.getUsers(i,100).subscribe(
            (dados: any) => {                         
              this.wpUsers.next([...this.wpUsers.getValue(), ...dados.body]);
            });
          }
      }          
    },(error) => {
      this.message = error.message;
    });  
  }
}
