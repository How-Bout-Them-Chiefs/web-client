import { TestBed } from '@angular/core/testing';

import { TeamDataParserService } from './team-data-parser.service';

describe('TeamDataParserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeamDataParserService = TestBed.get(TeamDataParserService);
    expect(service).toBeTruthy();
  });
});
