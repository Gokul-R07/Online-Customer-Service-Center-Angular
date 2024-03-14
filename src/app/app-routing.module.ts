import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateIssueComponent } from './components/create-issue/create-issue.component';
import { DisplayIssuesComponent } from './components/display-issues/display-issues.component';
const routes: Routes = [
  {path:'create-issue',component:CreateIssueComponent},
  {path:'display-issues',component:DisplayIssuesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
