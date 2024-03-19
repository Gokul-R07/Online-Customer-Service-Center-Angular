import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetIssuesByCustomerIdService } from '../../services/get-issues-by-customer-id.service';
import { Customer } from '../../model/customer';
import { Issue } from '../../model/issue';
import { IssueCardComponent } from '../issue-card/issue-card.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-issues-by-customer-id',
  templateUrl: './get-issues-by-customer-id.component.html',
  styleUrls: ['./get-issues-by-customer-id.component.css']
})
export class GetIssuesByCustomerIdComponent implements OnInit {

  customer:Customer=new Customer()
  issue:Issue=new Issue()
  data:any
  error:string=""
  customerDetails:any
  constructor(private getIssuesByCustomerIdService: GetIssuesByCustomerIdService,private route:ActivatedRoute) {
    this.getIssuesByCustomerIdService.getIssuesByCustomerId(1).subscribe(
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

    const stateData = this.route.parent?.snapshot.data['state'];
  console.log('State data received in child component:', stateData);
   }
 
  

  getIssuesByCustomerId() {
  }


 ngOnInit(): void {
  
    
}

  



}
