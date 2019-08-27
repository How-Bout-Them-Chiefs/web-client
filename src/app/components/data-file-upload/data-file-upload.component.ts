import { Component, OnInit } from '@angular/core';
import { TeamDataParserService, apiFormatTeamData } from '../../services/team-data-parser.service';

@Component({
  selector: 'app-data-file-upload',
  templateUrl: './data-file-upload.component.html',
  styleUrls: ['./data-file-upload.component.scss']
})
export class DataFileUploadComponent implements OnInit {

  private fileReader: FileReader = new FileReader();

  dataToUpload: any = null;
  JSON = JSON;
  error: string = null;
  success: string = null;

  constructor(
    private teamDataParser: TeamDataParserService
  ) { }

  ngOnInit() {
  }

  onFileChange(fileList: FileList) {
    this.error = null;
    this.success = null;
    if (fileList.length > 0) {
      const file = fileList[0];

      this.fileReader.onloadend = function() {
        this.dataToUpload = JSON.parse( this.fileReader.result );
      }.bind(this);
      this.fileReader.readAsText(file);
    } else {

    }
  }

  onUploadTeamDataClicked() {
    this.error = null;
    this.success = null;
    try {
      this.dataToUpload = this.teamDataParser.parseTeams(
        this.dataToUpload
      );
      this.success = "Success!";
    } catch( error ) {
      this.error = "Could not parse file as team data.";
    }
  }
}
