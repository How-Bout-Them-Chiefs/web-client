import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitlebarComponent } from './titlebar/titlebar.component';
import { SignInButtonComponent } from './sign-in-button/sign-in-button.component';
import { AuthSheetComponent } from './auth-sheet/auth-sheet.component';

@NgModule({
  declarations: [ TitlebarComponent, SignInButtonComponent, AuthSheetComponent ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
