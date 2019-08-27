import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth-sheet',
  templateUrl: './auth-sheet.component.html',
  styleUrls: ['./auth-sheet.component.scss']
})
export class AuthSheetComponent implements OnInit {

  private userSignedIn: boolean = null;

  constructor(
    private _bottomSheetRef: MatBottomSheetRef<AuthSheetComponent>,
    private authService: AuthService
  ) {
    this.authService.user.subscribe( {
      next: ( ( user ) => {

        var newSignedInValue = false;

        if( user ) {
          newSignedInValue = true;
        }

        if( this.userSignedIn != null && newSignedInValue != this.userSignedIn ) {
          this._bottomSheetRef.dismiss();
        }

        this.userSignedIn = newSignedInValue;

      } ).bind(this)
    } );
  }

  ngOnInit() {



  }

}
