import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppDataService, WebClientAppData } from '../../services/app-data.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.scss']
})
export class TitlebarComponent implements OnInit {

  appData: Observable<WebClientAppData>;
  fetchComplete: boolean = false;
  errorFetchingData: boolean = false;

  userNavOpen: boolean

  constructor(private appDataService: AppDataService) {}

  ngOnInit() {
    
    this.appData = this.appDataService.getAppData();
    this.appData.subscribe({
      next: ((data) => {
        this.fetchComplete = true;
      }).bind(this),
      error: (() => {
        this.errorFetchingData = true;
      }).bind(this)
    });

  }

}