import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GetIssuesByCustomerIdService } from '../../services/get-issues-by-customer-id.service';
import { Customer } from '../../model/customer';
import { Issue } from '../../model/issue';
import { IssueCardComponent } from '../issue-card/issue-card.component';

@Component({
  selector: 'app-get-issues-by-customer-id',
  templateUrl: './get-issues-by-customer-id.component.html',
  styleUrls: ['./get-issues-by-customer-id.component.css']
})
export class GetIssuesByCustomerIdComponent {
  customer:Customer=new Customer()
  issue:Issue=new Issue()
  data:any
  error:string=""
  constructor(private getIssuesByCustomerIdService: GetIssuesByCustomerIdService,private router:Router) {
    this.getIssuesByCustomerIdService.getIssuesByCustomerId(5402).subscribe(
      (data: Issue[]) => {
        console.log(data);
        this.error = "";
        this.data = data;
      },
      (error) => {
        this.error = error.message; // Update error handling as needed
        console.error(error);
      }
    );
   }
  

  getIssuesByCustomerId() {
    

}



}
