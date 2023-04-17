import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PayrollDashboardComponent } from './payroll-dashboard/payroll-dashboard.component';

const routes: Routes = [
  
  {path:'payroll-dashboard',component:PayrollDashboardComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayrollRoutingModule { }
