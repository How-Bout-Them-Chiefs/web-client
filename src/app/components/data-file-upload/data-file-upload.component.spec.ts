import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataFileUploadComponent } from './data-file-upload.component';

describe('DataFileUploadComponent', () => {
  let component: DataFileUploadComponent;
  let fixture: ComponentFixture<DataFileUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataFileUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
