import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CreateIssueService } from '../../services/CreateIssue.service';
import { Customer } from '../../model/customer';
import { Issue } from '../../model/issue';
import { NgToastService} from 'ng-angular-popup';

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
  
  constructor(private CreateIssueService: CreateIssueService,private router:Router,private toast:NgToastService) { }
  addIssueToCustomer(){
    this.CreateIssueService. addIssueToCustomer(1002,this.issue).subscribe(
      {
        next: (data) => {
          this.toast.success({detail:"Success Message", summary:"Issue creation is success", duration:5000});
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
