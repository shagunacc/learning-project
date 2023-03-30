import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{
  employees!:Employee[];
  //injecting EmployeeService class where baseurl is called/passed
  constructor(private employeeservice:EmployeeService,private router:Router){

  }
  ngOnInit():void{
    this.getEmployees();
  

  }
  //data is the response data and we are going to assign this data to the employees property which is representation of 
  // the array of objects
  private getEmployees(){
    this.employeeservice.getEmployeesList().subscribe(data => {this.employees=data;});
  }
  updateEmployee(id:number){
    this.router.navigate(['update-employee',id]);

  }

}
