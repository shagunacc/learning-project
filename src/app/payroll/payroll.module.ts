import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayrollDashboardComponent } from './payroll-dashboard/payroll-dashboard.component';



@NgModule({
  declarations: [
    PayrollDashboardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PayrollDashboardComponent
  ]
})
export class PayrollModule { }
