import { Component } from '@angular/core';
import { Issue } from '../../model/issue';
import { DeleteIssueService } from '../../services/delete-issue.service';
import { IssueCardComponent } from '../issue-card/issue-card.component';

@Component({
  selector: 'app-delete-issue',
  templateUrl: './delete-issue.component.html',
  styleUrls: ['./delete-issue.component.css']
})
export class DeleteIssueComponent {
  constructor(private deleteIssueService : DeleteIssueService) { }


  deleteIssue(customerId: number, issueId: number) {
    this.deleteIssueService.deleteIssue(customerId, issueId).subscribe(
      () => {
        console.log('Issue deleted successfully');
        // Add any additional logic or handling
      },
      error => {
        console.error('Error deleting issue:', error);
        // Handle error response
      }
    );
  }

}
