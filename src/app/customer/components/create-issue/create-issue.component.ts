import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { IssueService } from '../../services/issue.service';
import { Customer } from '../../model/customer';
import { Issue } from '../../model/issue';
import { NgToastService} from 'ng-angular-popup';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-issue',
  templateUrl: './create-issue.component.html',
  styleUrls: ['./create-issue.component.css']

})

export class CreateIssueComponent
{


  customer:Customer=new Customer()
  issue:Issue=new Issue()
  data:any
  error:string=""
  
  constructor(private issueService: IssueService,private router:Router,private toast:NgToastService) { }
  addIssueToCustomer(){
    this.issueService. addIssueToCustomer(5402,this.issue).subscribe(
      {
        next: (data) => {
          this.toast.success({detail:"Success Message", summary:"Issue creation is success", duration:5000});
          this.router.navigate(['display-issues']);
          console.log(data);
          this.error=""
          this.data = data;
        },
        error: (err) => {
          this.toast.error({detail:"Error Message", summary:"Issue creation is failed, try again later...", duration:5000});
          this.error=err.error
          console.log(err)
        }
      }
    )
  }

  

}
