import { Injectable } from '@angular/core';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees:Employee[]=[
    {eid:200,ename:'Vaishnav',email:'vaishnav@gmail.com',esal:50000,doj:new Date('2023-07-23'),
    deptno:100},
    {eid:201,ename:'Akhil',email:'akhil@gmail.com',esal:45000,doj:new Date('2023-07-26'),
    deptno:100},
    {eid:202,ename:'Arun',email:'arun@gmail.com',esal:55000,doj:new Date('2023-06-13'),
    deptno:101}
  ]

  constructor() { }

  getEmployees():Employee[]{
    return this.employees;
  }
}
