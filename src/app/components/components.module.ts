import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitlebarComponent } from './titlebar/titlebar.component';
import { DataFileUploadComponent } from './data-file-upload/data-file-upload.component';

@NgModule({
  declarations: [ TitlebarComponent, DataFileUploadComponent ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
