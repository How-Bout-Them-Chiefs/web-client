import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'; 
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import { AuthSheetComponent } from './../auth-sheet/auth-sheet.component';

@Component({
  selector: 'app-sign-in-button',
  templateUrl: './sign-in-button.component.html',
  styleUrls: ['./sign-in-button.component.scss']
})
export class SignInButtonComponent implements OnInit {

  constructor(private _authSheet: MatBottomSheet) { }

  faUserCircle = faUserCircle;
  @Output() clicked = new EventEmitter<boolean>();

  ngOnInit() {
    
  }

  signInClicked() {
    this._authSheet.open(AuthSheetComponent);
  } 

}