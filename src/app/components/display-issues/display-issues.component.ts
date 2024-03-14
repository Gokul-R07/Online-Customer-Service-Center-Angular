import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DisplayIssuesService } from 'src/app/services/display-issues.service';
import { Customer } from '../../model/customer';
import { Issue } from '../../model/issue';

@Component({
  selector: 'app-display-issues',
  templateUrl: './display-issues.component.html',
  styleUrls: ['./display-issues.component.css']
})
export class DisplayIssuesComponent {
[x: string]: any;

  issues: Issue[] = [];
  
  error:string=""

  constructor(private displayIssueService:DisplayIssuesService) {}

  getAllIssues() {
    this.displayIssueService.getAllIssues().subscribe({
      next: (issues) => {
        console.log(issues);
        this.error=""
        
      },
      error: (err) => {
        this.error=err.error
        console.log(err)
      }
    })
  }

}
