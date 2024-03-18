import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetIssuesByCustomerIdComponent } from './get-issues-by-customer-id.component';

describe('GetIssuesByCustomerIdComponent', () => {
  let component: GetIssuesByCustomerIdComponent;
  let fixture: ComponentFixture<GetIssuesByCustomerIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetIssuesByCustomerIdComponent]
    });
    fixture = TestBed.createComponent(GetIssuesByCustomerIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
