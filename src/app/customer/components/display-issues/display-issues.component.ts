import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedDataService } from '../../services/shared-data.service';
import { Issue } from '../../model/issue';
import { CommonModule } from '@angular/common';
import { IssueService} from '../../services/issue.service';

@Component({
  selector: 'app-display-issues',
  templateUrl: './display-issues.component.html',
  styleUrls: ['./display-issues.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class DisplayIssueComponent
{
  issue : Issue= new Issue();
  issues:Issue[]=[];
  message: string = "";
  errorMessage: string = "";

  constructor(private issueService: IssueService,private router:Router, private sharedDataService:SharedDataService)
   {
    this.issueService.getIssuesByCustomerId(1).subscribe(
      {
        next: (data) => {
          console.log(data);
          this.issues = data;
        },
        error: (err) => {
          console.log(err);
          this.errorMessage = "Could't Load Issues";
          this.message = "";
        },
        complete: () => {
          console.log("Server completed sending data.");

        }
      }
    )
   }
   

   deleteIssue(customerId?:number, issueId?: number) {

    console.log("delete id:" + issueId);

    if (confirm("Do you want to Delete Issue id:" + issueId))

    this.issueService.deleteIssue(1,issueId).subscribe(
      {
        next: (resp) => {
          console.log(resp);
          // delete issue with id in local array
          this.issues = this.issues.filter((a) => a.issueId != issueId);
          this.message = "Deleted Issue with id:" + issueId;
          this.errorMessage = "";
        },
        error: (err) => {
          console.log(err);
          this.message = "";
          this.errorMessage = "Coule not Delete Issue.";
        }
      }
    );
  }


  
  public navigateToUpdate(customerId:number,issueId:number){
    this.sharedDataService.setCustomerId(customerId);
    this.sharedDataService.setIssueId(issueId);
    this.router.navigate(['customer/edit-issue']);
  }

  public navigateToSolution(customerId:number,issueId:number){
    this.sharedDataService.setCustomerId(customerId);
    this.sharedDataService.setIssueId(issueId);
    this.router.navigate(['customer/view-solution']);
  }
  
}



