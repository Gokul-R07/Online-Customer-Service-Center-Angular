import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CreateIssueService } from '../../services/CreateIssue.service';
import { Customer } from '../../model/customer';
import { Issue } from '../../model/issue';
@Component({
  selector: 'app-create-issue',
  templateUrl: './create-issue.component.html',
  styleUrls: ['./create-issue.component.css']
})
export class CreateIssueComponent
{
// addIssueToCustomer() {
// throw new Error('Method not implemented.');
// }
  customer:Customer=new Customer()
  issue:Issue=new Issue()
  data:any
  error:string=""
  constructor(private CreateIssueService: CreateIssueService,private router:Router) { }
  addIssueToCustomer(){
    this.CreateIssueService. addIssueToCustomer(this.customer.customerId,this.issue).subscribe(
      {
        next: (data) => {
          console.log(data);
          this.error=""
          this.data = data;
        },
        error: (err) => {
          this.error=err.error
          console.log(err)
        }
      }
    )
  }

}
