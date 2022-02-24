import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IWpUser } from '../../interfaces/iwp-user.interface';
import { WordpressService } from '../../services/wordpress.service';

@Component({
  selector: 'app-wordpress-users',
  templateUrl: './wordpress-users.component.html',
  styleUrls: ['./wordpress-users.component.scss']
})
export class WordpressUsersComponent implements OnInit {
  
  private wpUsers: BehaviorSubject<IWpUser[]> = new BehaviorSubject<IWpUser[]>([]);
  wpUsers$ = this.wpUsers.asObservable();

  message: string = "";

  constructor(private WordpressService: WordpressService) { 
    this.WordpressService.getUsers().subscribe(
      (users: IWpUser[]) => {        
        this.wpUsers.next(users);
      }
    ,(error) => {
      this.message = error.message;
    });
  }

  ngOnInit(): void {
  }

}
