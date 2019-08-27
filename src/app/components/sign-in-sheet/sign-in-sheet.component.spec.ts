import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInSheetComponent } from './sign-in-sheet.component';

describe('SignInSheetComponent', () => {
  let component: SignInSheetComponent;
  let fixture: ComponentFixture<SignInSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
