import { Injectable } from '@angular/core';
import { Department } from '../department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  departments:Department[]=[
    {deptno:100,deptname:'FSE',location:'Chennai'},
    {deptno:101,deptname:'QEA',location:'Pune'},
    {deptno:102,deptname:'ADM',location:'Bengaluru'},
  ]

  constructor() { }

  getDepartments():Department[]{
    return this.departments;
  }

  addDepartment(department:Department):void{
    this.departments.push(department);
  }
}
