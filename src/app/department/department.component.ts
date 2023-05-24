import { Component } from '@angular/core';
import { Department } from '../department';
import { DepartmentService } from '../service/department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent {

  departments!:Department[];
  constructor(private departmentService:DepartmentService){}

  ngOnInit(){
    this.departments=this.departmentService.getDepartments();
  }

}
