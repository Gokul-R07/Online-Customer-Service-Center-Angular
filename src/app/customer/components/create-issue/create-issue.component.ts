import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Customer } from '../../model/customer';
import { Issue } from '../../model/issue';
import { NgToastService} from 'ng-angular-popup';
import { IssueService } from '../../services/issue.service';


@Component({
  selector: 'app-create-issue',
  templateUrl: './create-issue.component.html',
  styleUrls: ['./create-issue.component.css']
})


export class CreateIssueComponent
{
  
   id: number = 0;
   email:any;
  




  customer:Customer=new Customer()
  issue:Issue=new Issue()
  data:any
  error:string=""
  
  constructor(private issueService:IssueService,private router:Router,private toast:NgToastService) {
    this.email=sessionStorage.getItem('email');
    const storedId = sessionStorage.getItem('id');
    if (storedId) {
      this.id = parseInt(storedId, 10);
    }
   }
  addIssueToCustomer(){

    console.log(this.issue)
    
    this.issueService. addIssueToCustomer(this.id,this.issue).subscribe(
      {
        next: (data) => {
          this.toast.success({detail:"Success Message", summary:"Issue creation is success", duration:5000});
          console.log(data);
          this.error=""
          this.data = data;
          this.router.navigate(['/customer']);
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

