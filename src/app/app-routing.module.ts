import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateIssueComponent } from './customer/components/create-issue/create-issue.component';
import { DisplayIssuesComponent } from './customer/components/display-issues/display-issues.component';
import { GetIssuesByCustomerIdComponent } from './customer/components/get-issues-by-customer-id/get-issues-by-customer-id.component';
import { CustomerComponent } from './customer/components/customer/customer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { OperatorModuleComponent } from './operator/components/operator-module/operator-module.component';
const routes: Routes = [
  {path:'create-issue',component:CreateIssueComponent},
  {path:'display-issues',component:DisplayIssuesComponent},
  {path:'get-issues-by-customer-id',component:GetIssuesByCustomerIdComponent},
  {path:'customer',component:CustomerComponent},
  {path:"home",component:HomepageComponent},
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
},
{
  path: 'operator',
  component: OperatorModuleComponent,
},



];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
