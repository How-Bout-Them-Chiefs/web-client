import { environment } from '../environments/environment';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { Browser } from 'protractor';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TeamDataParserService } from './services/team-data-parser.service';

/* Components */
import { AppComponent } from './app.component';
import { TitlebarComponent } from './components/titlebar/titlebar.component';
import { DataFileUploadComponent } from './components/data-file-upload/data-file-upload.component';

/* Firebase */
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

/* Material */
import { MatToolbarModule } from '@angular/material/toolbar';
import { RoutesModule } from './routes/routes.module';

@NgModule({
  declarations: [
    AppComponent,
    TitlebarComponent,
    DataFileUploadComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    /* Firebase */
    AngularFireModule.initializeApp( environment.firebase ),
    AngularFirestoreModule,

    /* Material */
    MatToolbarModule,

    RoutesModule
  ],
  providers: [
    TeamDataParserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
