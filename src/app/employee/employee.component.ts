import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  employees!:Employee[];

  constructor(private employeeService:EmployeeService){}

  ngOnInit(){
    this.employees=this.employeeService.getEmployees();
  }

}
