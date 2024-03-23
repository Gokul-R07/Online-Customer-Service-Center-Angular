import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayIssueComponent } from './display-issues.component';

describe('DisplayIssueByIdComponent', () => {
  let component: DisplayIssueComponent;
  let fixture: ComponentFixture<DisplayIssueComponent>;

  beforeEach(async() => {
   await TestBed.configureTestingModule({
      imports: [DisplayIssueComponent]
    }).compileComponents;

    fixture = TestBed.createComponent(DisplayIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
