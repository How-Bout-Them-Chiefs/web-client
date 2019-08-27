import { environment } from '../environments/environment';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { Browser } from 'protractor';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Services */
import { AppDataService } from './services/app-data.service';
import { AuthService } from './services/auth.service';

/* Components */
import { AppComponent } from './app.component';
import { TitlebarComponent } from './components/titlebar/titlebar.component';
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
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

/* Font Awesome */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    TitlebarComponent,
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
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
