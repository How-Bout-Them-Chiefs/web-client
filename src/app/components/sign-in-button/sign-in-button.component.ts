import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import { AuthSheetComponent } from './../auth-sheet/auth-sheet.component';
import { AuthService } from '../../services/auth.service';
import { User } from 'firebase';

const SIGN_IN_TEXT = "Sign In"

@Component({
  selector: 'app-sign-in-button',
  templateUrl: './sign-in-button.component.html',
  styleUrls: ['./sign-in-button.component.scss']
})
export class SignInButtonComponent implements OnInit {

  buttonText: string = SIGN_IN_TEXT;

  constructor(
    private _authSheet: MatBottomSheet,
    private authService: AuthService
  ) {

    authService.user.subscribe({
      next: ( (user: User ) => {

        if ( user ) {
          this.buttonText = user.displayName;
        } else {
          this.buttonText = SIGN_IN_TEXT;
        }

      }).bind(this),
      error: ( error => console.error( error ) )
    });

  }

  faUserCircle = faUserCircle;
  @Output() clicked = new EventEmitter<boolean>();

  ngOnInit() {

  }

  signInClicked() {
    this._authSheet.open(AuthSheetComponent);
  }

}