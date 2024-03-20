import { Injectable } from '@angular/core';
import { Issue } from '../model/issue';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  constructor() {
    
   }

  private customerId: number=0;
  private issueId: number=0;
   private issue:Issue=new Issue();
   private customer: Customer = new Customer();

   setCustomer(customer: Customer) {
    this.customer = customer;
  }

  getCustomer(): Customer {
    return this.customer;
  }

  setCustomerId(customerId: number) {
    this.customerId = customerId;
  }

  getCustomerId(): number {
    return this.customerId;
  }

  setIssue(issue: Issue) {
    this.issue = issue;
  }

  getIssue(): Issue {
    return this.issue;
  }
  setIssueId(issueId: number) {
    this.issueId = issueId;
  }

  getIssueId(): number {
    return this.issueId;
  }
}
