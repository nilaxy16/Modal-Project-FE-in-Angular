import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/Modal/Course';
import { Department } from 'src/app/Modal/Department';
import { DataServiceService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  departments: Department[] = [];
  DeptStudents: any;
  empty: boolean = false;
  DeptName: string = '';
  DeptCourses: Course[] = [];
  deptId: string = '';

  constructor(private dataservice: DataServiceService) { }

  ngOnInit(): void {
    this.dataservice.getDepartmentList().subscribe(data => {
      this.departments = data;
    });
  }

  ShowStudent(deptId: string) {
    this.deptId = deptId;
    this.dataservice.getDepartmentById(deptId).subscribe(data => {
      this.DeptStudents = data;
    });
  }

  ShowCourses(deptId: string) {
    this.deptId = deptId;
    this.dataservice.getCourseById(deptId).subscribe(data => {
      this.DeptCourses = data;
    });
  }

}
