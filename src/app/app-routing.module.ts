import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperatorModuleComponent } from './operator/components/operator-module/operator-module.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/operator',
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
export class AppRoutingModule { }
