import { Component } from '@angular/core';
import { IssueService } from '../../services/issue.service';
import { Issue } from '../../model/issue';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { SharedDataService } from '../../services/shared-data.service'
import { NgToastService} from 'ng-angular-popup';

@Component({
  selector: 'app-edit-issue',
  templateUrl: './edit-issue.component.html',
  styleUrls: ['./edit-issue.component.css']
})
export class EditIssueComponent {

  
  customerId: number;
  issueId: number;
  issueDescription: string="";
  issue:Issue = new Issue();
  errorMessage : string='';
  constructor(private router:Router,private issueService:IssueService, private route:ActivatedRoute, private sharedDataService:SharedDataService, private toast:NgToastService){
   
   
    this.customerId = this.sharedDataService.getCustomerId();
    this.issueId = this.sharedDataService.getIssueId();
    
    console.log(this.issueId);

    this.issueService.getIssueByIssueId(this.issueId).subscribe(

      {
        next: (data) => {

         // console.log("this is the issue"+data);
          console.log(data);
          this.issue = data;
         // console.log(this.issue);
        },
        error: (err) => {
          console.log(err);
          this.errorMessage = "Could't Load Issues";
          this.errorMessage = "";
        },
        complete: () => {
          console.log("Server completed sending data.");

        }
      }
    );
  }
  

  updateIssueDescription() {
    this.issueService.updateIssueDescription(this.customerId,this.issueId, this.issueDescription).subscribe(
      (updatedIssue) => {
        this.toast.success({detail:"Success Message", summary:"Issue Description updated", duration:5000});
        console.log('Issue description updated successfully:', updatedIssue);
        this.router.navigate(['display-issues']);
        // Handle success response, update UI or perform any further actions
      },
      (error) => {
        this.toast.error({detail:"Error Message", summary:"Issue Description updation is failed, try again later...", duration:5000});
        console.error('Error updating issue description:', error);
        // Handle error response
      }
    );
  }

  
}
