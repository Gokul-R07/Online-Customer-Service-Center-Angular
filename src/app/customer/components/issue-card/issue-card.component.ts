import { Component, Input , Output, EventEmitter} from '@angular/core';
import { Issue } from '../../model/issue';
import { DeleteIssueService } from '../../services/delete-issue.service';
import { DeleteIssueComponent } from '../delete-issue/delete-issue.component';
import { CreateIssueComponent } from '../create-issue/create-issue.component';
import { Customer } from '../../model/customer';
@Component({
  selector: 'app-issue-card',
  templateUrl: './issue-card.component.html',
  styleUrls: ['./issue-card.component.css']
})
export class IssueCardComponent {
  
    @Input() issue: Issue;
  //  @Output() deleteIssueEvent = new EventEmitter<{customerId: number, issueId: number}>();
  
    constructor() {
      this.issue = new Issue();

     }
     deleteIssue(customerId: number, issueId: number) {
     
    }
  

}
