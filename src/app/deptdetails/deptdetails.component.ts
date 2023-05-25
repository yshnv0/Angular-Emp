import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Department } from '../department';
import { DepartmentService } from '../service/department.service';

@Component({
  selector: 'app-deptdetails',
  templateUrl: './deptdetails.component.html',
  styleUrls: ['./deptdetails.component.css']
})
export class DeptdetailsComponent {

  message:string='Department Details';
  department!:Department;
  isDeptFound:boolean=false;


  constructor(private route:ActivatedRoute,private departmentService:DepartmentService){}

  ngOnInit(){
    this.route.params.subscribe ((params)=>{
      let deptid=params['id'];

      console.log(deptid)

      let departments=this.departmentService.getDepartments();
      departments.map(dept=>{
        if(dept.deptno==deptid){
          this.department=dept;
          this.isDeptFound=true;
        }
      })
    })
  }

}
