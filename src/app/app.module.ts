import { environment } from '../environments/environment';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { Browser } from 'protractor';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Services */
import { AppDataService } from './services/app-data.service';
import { AuthService } from './services/auth.service';
import { TeamDataParserService } from './services/team-data-parser.service';

/* Components */
import { AppComponent } from './app.component';
import { TitlebarComponent } from './components/titlebar/titlebar.component';
import { DataFileUploadComponent } from './components/data-file-upload/data-file-upload.component';
import { SignInButtonComponent } from './components/sign-in-button/sign-in-button.component';
import { AuthSheetComponent } from './components/auth-sheet/auth-sheet.component';
import { ProfileSheetComponent } from './components/profile-sheet/profile-sheet.component';
import { SignInSheetComponent } from './components/sign-in-sheet/sign-in-sheet.component';

/* Firebase */
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

/* Material */
import { MatToolbarModule } from '@angular/material/toolbar';
import { RoutesModule } from './routes/routes.module';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

/* Font Awesome */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    TitlebarComponent,
    DataFileUploadComponent,
    SignInButtonComponent,
    AuthSheetComponent,
    ProfileSheetComponent,
    SignInSheetComponent
  ],
  entryComponents: [AuthSheetComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RoutesModule,

    /* Firebase */
    AngularFireModule.initializeApp( environment.firebase ),
    AngularFirestoreModule,
    AngularFireAuthModule,

    /* Material */
    MatToolbarModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatListModule,
    /* Font Awesome */
    FontAwesomeModule
  ],
  providers: [
    AppDataService,
    AuthService,
    TeamDataParserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
