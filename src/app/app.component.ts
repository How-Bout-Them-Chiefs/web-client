import { Component } from '@angular/core';
import { AppDataService } from './services/app-data.service';
import { Observable } from 'rxjs';

interface WebClientAppData {
  title: string;
  author: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  appData: Observable<WebClientAppData>;
  fetchComplete: boolean = false;
  errorFetchingData: boolean = false;

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
