import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateIssueComponent } from './customer/components/create-issue/create-issue.component';
import { DisplayIssuesComponent } from './customer/components/display-issues/display-issues.component';
import { GetIssuesByCustomerIdComponent } from './customer/components/get-issues-by-customer-id/get-issues-by-customer-id.component';
const routes: Routes = [
  {path:'create-issue',component:CreateIssueComponent},
  {path:'display-issues',component:DisplayIssuesComponent},
  {path:'get-issues-by-customer-id',component:GetIssuesByCustomerIdComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
