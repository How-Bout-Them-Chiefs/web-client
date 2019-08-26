import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataFileUploadComponent } from '../components/data-file-upload/data-file-upload.component';

const routes: Routes = [
  { path: 'datafileupload', component: DataFileUploadComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesModule { }