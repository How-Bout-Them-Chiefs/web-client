import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitlebarComponent } from './titlebar/titlebar.component';
import { DataFileUploadComponent } from './data-file-upload/data-file-upload.component';
import { SignInButtonComponent } from './sign-in-button/sign-in-button.component';
import { AuthSheetComponent } from './auth-sheet/auth-sheet.component';
import { SignInSheetComponent } from './sign-in-sheet/sign-in-sheet.component';
import { ProfileSheetComponent } from './profile-sheet/profile-sheet.component';

@NgModule({
  declarations: [ TitlebarComponent, SignInButtonComponent, AuthSheetComponent, SignInSheetComponent, ProfileSheetComponent, DataFileUploadComponent ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
