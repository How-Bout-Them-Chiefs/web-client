import { Component, OnInit } from '@angular/core';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in-sheet',
  templateUrl: './sign-in-sheet.component.html',
  styleUrls: ['./sign-in-sheet.component.scss']
})
export class SignInSheetComponent implements OnInit {

  faGoogle = faGoogle;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }


  signInButtonPressed() {
    this.authService.initiateGoogleSignIn();
  }

}
