import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from 'firebase/app';
import { User } from 'firebase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user = new Observable<User>( (observer) => {

    this.firebaseAuth.user.subscribe({
      next: (( user: User ) => {
        observer.next( user )
      }).bind(this),
      error: (( error: Error ) => {
        observer.error( error );
      }).bind(this)
    });

    return { unsubscribe() {} };
  });

  constructor(
    private firebaseAuth: AngularFireAuth
  ) {

  }


  async initiateGoogleSignIn() {
    await this.firebaseAuth.auth.signInWithPopup(
      new auth.GoogleAuthProvider()
    )
  }
}
