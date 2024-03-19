import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateIssueComponent } from './customer/components/create-issue/create-issue.component';
import { DisplayIssuesComponent } from './customer/components/display-issues/display-issues.component';
import { GetIssuesByCustomerIdComponent } from './customer/components/get-issues-by-customer-id/get-issues-by-customer-id.component';
import { CustomerComponent } from './customer/components/customer/customer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { OperatorModuleComponent } from './operator/components/operator-module/operator-module.component';
import { UpdateIssueComponent } from './customer/components/update-issue/update-issue.component';
const routes: Routes = [
  {path:'display-issues',component:DisplayIssuesComponent},
  {path:'upate-issue', component:UpdateIssueComponent},
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
{
  path: 'customer',
  component: CustomerComponent,
  children: [
    { path: 'create-issue', component: CreateIssueComponent },
    { path: 'get-all-issues', component:GetIssuesByCustomerIdComponent }
  ]
}


];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
