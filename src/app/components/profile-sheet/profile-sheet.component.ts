import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile-sheet',
  templateUrl: './profile-sheet.component.html',
  styleUrls: ['./profile-sheet.component.scss']
})
export class ProfileSheetComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  signOutButtonPressed() {
    this.authService.signOut();
  }

}
