import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-auth-sheet',
  templateUrl: './auth-sheet.component.html',
  styleUrls: ['./auth-sheet.component.scss']
})
export class AuthSheetComponent implements OnInit {

  faGoogle = faGoogle;

  constructor(private _bottomSheetRef: MatBottomSheetRef<AuthSheetComponent>,
              public afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.afAuth.user.subscribe({
      next: (( data ) => {
        console.log( "auth user" );
        console.log( data );
      }).bind(this),
      error: (( error ) => {
        console.log( "error" );
        console.log( error );
      }).bind(this)
    });
  }

  openLink(event: MouseEvent): void {
  }

}
