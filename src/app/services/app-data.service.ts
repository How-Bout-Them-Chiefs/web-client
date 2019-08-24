import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface WebClientAppData {
  title: string;
  author: string;
}

@Injectable({
  providedIn: 'root'
})
export class AppDataService {

  private appData: Observable<WebClientAppData>;

  constructor(private db: AngularFirestore) { }

  public getAppData(): Observable<WebClientAppData> {
    if( !this.appData ) {
      this.appData = this.db.collection('app-data').doc<WebClientAppData>('web-client').valueChanges();
    }
    return this.appData;
  }
}
