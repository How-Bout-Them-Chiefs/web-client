import { Injectable } from '@angular/core';

export interface apiFormatTeamData {
  abr: string;
  city: string;
  name: string;
  conf: string;
  div: string;
}

export interface TeamData {
  abbreviation: string;
  city: string;
  conference: string;
  division: string;
  mascot: string;
}

@Injectable({
  providedIn: 'root'
})
export class TeamDataParserService {

  constructor() { }

  parseTeam( sourceTeam: apiFormatTeamData ) : TeamData {
    return {
      abbreviation: sourceTeam.abr,
      city: sourceTeam.city,
      conference: sourceTeam.conf,
      division: sourceTeam.div,
      mascot: sourceTeam.div
    }
  }

  parseTeams( source: apiFormatTeamData[] ): TeamData[] {

    var i = 0;
    var result: TeamData[] = [];

    source.forEach( ( sourceTeam: apiFormatTeamData ) => {
      result[ i ] = this.parseTeam( sourceTeam );
      i++;
    } );

    return result;
  }
}
