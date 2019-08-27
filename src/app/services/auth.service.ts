import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from 'firebase/app';
import { User } from 'firebase';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private subscribers: Subscriber<User>[] = [];
  private subscriberCount = 0;

  public user = new Observable<User>( ( (observer) => {

    this.subscribers[ this.subscriberCount ] = observer;
    this.subscriberCount++;

    observer.next( this.firebaseAuth.auth.currentUser );

    return { unsubscribe() {
      this.subscribers.splice( this.subscribers.indexOf( observer ) );
    } };
  }).bind(this));

  constructor(
    private firebaseAuth: AngularFireAuth
  ) {

    this.firebaseAuth.user.subscribe({
      next: (( user: User ) => {

        this.subscribers.forEach( subscriber => {
          subscriber.next( user );
        } );

        if( user != null ) {
          console.log( "User Signed In:" );
          console.log( user );
        } else {
          console.log( "User Signed out" );
        }

      }).bind(this),
      error: (( error: Error ) => {

        this.subscribers.forEach( subscriber => {
          subscriber.error( error );
        } );

        console.error( "New auth user error" );
        console.error( error );

      }).bind(this)
    });

  }


  async initiateGoogleSignIn() {
    await this.firebaseAuth.auth.signInWithPopup(
      new auth.GoogleAuthProvider()
    )
  }

  async signOut() {
    await this.firebaseAuth.auth.signOut();
  }
}
