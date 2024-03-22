import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateIssueComponent } from './customer/components/create-issue/create-issue.component';
import { EditIssueComponent } from './customer/components/edit-issue/edit-issue.component';
import { DisplayIssueComponent } from './customer/components/display-issues/display-issues.component';
import { ViewSolutionComponent } from './customer/components/view-solution/view-solution.component';
const routes: Routes = [
  {path:'create-issue',component:CreateIssueComponent},
  {path:'edit-issue', component:EditIssueComponent},
  {path:'display-issues', component:DisplayIssueComponent},
  {path:'view-solution', component:ViewSolutionComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
