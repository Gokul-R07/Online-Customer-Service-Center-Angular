import { Component } from '@angular/core';
import { IssueService } from '../../services/issue.service';
import { Issue } from '../../model/issue';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { SharedDataService } from '../../services/shared-data.service'
import { NgToastService} from 'ng-angular-popup';


@Component({
  selector: 'app-view-solution',
  templateUrl: './view-solution.component.html',
  styleUrls: ['./view-solution.component.css']
})
export class ViewSolutionComponent {


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



  acceptSolution(): void {
    this.issueService.acceptIssueSolution(this.issue.issueId, this.issue.solutions[0].solutionId).subscribe(
      response => {
        console.log('Solution accepted:', response);
        this.toast.success({detail:"Success Message", summary:"Solution Accepted", duration:5000});
        // Add any additional logic here after accepting the solution
      },
      error => {
        console.error('Error accepting solution:', error);
        this.toast.error({detail:"Error Message", summary:"Solution Accept Failed, try again later...", duration:5000});
      }
    );
  }

  rejectSolution() {
    this.issueService.rejectIssueSolution(this.issue.issueId, this.issue.solutions[0].solutionId).subscribe(
      response => {
        console.log('Solution rejected:', response);
        this.toast.success({detail:"Success Message", summary:"Solution Rejected", duration:5000});
        // Add any additional logic here after rejecting the solution
      },
      error => {
        console.error('Error rejecting solution:', error);
        this.toast.error({detail:"Error Message", summary:"Solution Reject is failed, try again later...", duration:5000});
      }
    );
  }



}
