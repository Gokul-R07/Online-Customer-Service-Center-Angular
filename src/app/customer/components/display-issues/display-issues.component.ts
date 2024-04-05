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
  id: number = 0;
  email:any;
  issue : Issue= new Issue();
  issues:Issue[]=[];
  message: string = "";
  errorMessage: string = "";

  constructor(private issueService: IssueService,private router:Router, private sharedDataService:SharedDataService)
   {

    this.email=sessionStorage.getItem('email');
    const storedId = sessionStorage.getItem('id');
    if (storedId) {
      this.id = parseInt(storedId, 10);
    }
    this.issueService.getIssuesByCustomerId(this.id).subscribe(
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
   

   deleteIssue( issueId: number) {

    console.log("delete id:" + issueId);

    if (confirm("Do you want to delete this issue"))

    this.issueService.deleteIssue(this.id,issueId).subscribe(
      {
        next: (resp) => {
          console.log(resp);
          // delete issue with id in local array
          this.issues = this.issues.filter((a) => a.issueId != issueId);
          this.message = "Deleted Issue Succesfully" 
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


  
  public navigateToUpdate(issueId:number){
    this.sharedDataService.setCustomerId(this.id);
    this.sharedDataService.setIssueId(issueId);
    this.router.navigate(['customer/edit-issue']);
  }

  public navigateToSolution(issueId:number){
    this.sharedDataService.setCustomerId(this.id);
    this.sharedDataService.setIssueId(issueId);
    this.router.navigate(['customer/view-solution']);
  }
  
}



