import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IWpSetting } from '../../interfaces/iwp-setting.interface';
import { WordpressService } from '../../services/wordpress.service';

@Component({
  selector: 'app-wordpress-settings',
  templateUrl: './wordpress-settings.component.html',
  styleUrls: ['./wordpress-settings.component.scss']
})
export class WordpressSettingsComponent implements OnInit {

  private wpSettings: BehaviorSubject<IWpSetting[]> = new BehaviorSubject<IWpSetting[]>([]);
  wpSettings$ = this.wpSettings.asObservable();

  message: string = "";

  constructor(private WordpressService: WordpressService) { 
    this.WordpressService.getSettings().subscribe(
      (settings: IWpSetting[]) => {
        debugger
        this.wpSettings.next(settings);
      }
      ,(error) => {
        this.message = error.message;
      });
  }

  ngOnInit(): void {
  }

}
