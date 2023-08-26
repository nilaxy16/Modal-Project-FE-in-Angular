import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/service/data-service.service';
import { Student } from 'src/app/Modal/Student';
import { Router } from '@angular/router';
import { Department } from 'src/app/Modal/Department';

@Component({
  selector: 'app-show-student',
  templateUrl: './show-student.component.html',
  styleUrls: ['./show-student.component.css']
})
export class ShowStudentComponent implements OnInit {

  students: Student[] | undefined;
  filteredStudents: Student[] | undefined;
  departments: Department[] = [];
  filterDept: Department = new Department;
  editstudent: boolean = false;
  heading = 'Add Student';
  student: Student = new Student();
  studentId: string = '';

  constructor(private dataservice: DataServiceService, private router: Router) { }

  ngOnInit(): void {
    this.studentlist();
  }

  studentlist() {
    this.dataservice.getStudentList().subscribe(data => {
      this.students = data;
    });
  }

  EditStudent(studentId: any) {
    this.heading = 'Update Student';
    this.editstudent = true;
    this.studentId = studentId;
  }

  deleteClick(student: Student){
    if(confirm('Are you sure??')){
      this.dataservice.deleteStudent(student.studentId).subscribe();
      window.location.reload();
    }
  }  

}
