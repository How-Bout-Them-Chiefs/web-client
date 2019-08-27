import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-sheet',
  templateUrl: './auth-sheet.component.html',
  styleUrls: ['./auth-sheet.component.scss']
})
export class AuthSheetComponent implements OnInit {

  faGoogle = faGoogle;

  constructor(
    private _bottomSheetRef: MatBottomSheetRef<AuthSheetComponent>,
    private authService: AuthService
  ) {

  }

  ngOnInit() {

  }

  openLink(event: MouseEvent): void {
    this.authService.initiateGoogleSignIn();
  }

}
