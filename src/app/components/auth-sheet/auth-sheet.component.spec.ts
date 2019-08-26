import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthSheetComponent } from './auth-sheet.component';

describe('AuthSheetComponent', () => {
  let component: AuthSheetComponent;
  let fixture: ComponentFixture<AuthSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
