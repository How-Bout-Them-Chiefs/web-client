import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-file-upload',
  templateUrl: './data-file-upload.component.html',
  styleUrls: ['./data-file-upload.component.scss']
})
export class DataFileUploadComponent implements OnInit {

  private fileReader: FileReader = new FileReader();

  fileContents = {};
  JSON = JSON;

  constructor() { }

  ngOnInit() {
  }

  onFileChange(fileList: FileList) {
    if (fileList.length > 0) {
      const file = fileList[0];

      this.fileReader.onloadend = function() {
        this.fileContents = JSON.parse( this.fileReader.result );
      }.bind(this);
      this.fileReader.readAsText(file);
    }
  }
}
