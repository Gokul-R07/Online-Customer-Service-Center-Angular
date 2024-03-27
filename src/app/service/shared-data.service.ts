import { Injectable } from '@angular/core';
import { Customer } from '../customer/model/customer';
import { Issue } from '../customer/model/issue';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  constructor() {
    
   }

  private customerId: number=0;
  private issueId: number=0;
  private email: string="";
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
  setEmail(email: string){
    this.email=email;
  }
  getEmail(): string{
    return this.email;
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