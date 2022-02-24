import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  constructor(private _snackBar: MatSnackBar, private WordpressService: WordpressService) { 
    this.WordpressService.getUsers(1,100).subscribe( (counter) => {
      const totalPages = counter.headers.get('X-WP-TotalPages');
      const totalItems = counter.headers.get('X-WP-Total');
      this._snackBar.open('Found: ' + totalItems.toString(), 'Info');
      if (totalPages) {                              
        this.wpUsers.next([...this.wpUsers.getValue(), ...counter.body]);
        for (let i = 2; i <= totalPages; i++) {
          this.WordpressService.getUsers(i,100).subscribe(
            (dados: any) => {                         
              this.wpUsers.next([...this.wpUsers.getValue(), ...dados.body]);
            });
          }
      }          
    },(error) => {
      this._snackBar.open(error.message, 'Error');
    });  
  }
}
