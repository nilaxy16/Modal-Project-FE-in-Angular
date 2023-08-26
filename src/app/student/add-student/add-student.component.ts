import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from 'src/app/Modal/Student';
import { DataServiceService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  @Input() heading: string = '';
  @Input() StudentId: any;
  @Input() editstudent: any;
  student: Student = new Student();
  departments: any;
  addForm: FormGroup;
  newStudent: any;
  courses: any;

  constructor(private dataservice: DataServiceService, private router: Router, private fb: FormBuilder) {
    this.addForm = this.fb.group({
      studentid: new FormControl('', [Validators.required]),
      fullname: new FormControl('', [Validators.required]),
      mobile: new FormControl('', [Validators.required])
    });

  }

  ngOnInit(): void {
    this.dataservice.getDeptmentNames().subscribe(data => {
      this.departments = data;
    })

    console.log(this.StudentId);
    if (this.StudentId) {
      this.dataservice.getStudentById(this.StudentId).subscribe(data => {
        this.student = data;
        console.log(this.student.deptId);

        if (this.student && this.student.deptId) {
          this.dataservice.getCourseById(this.student.deptId).subscribe(data => {
            this.courses = data;
          });
          //console.log(this.courses);
        }
      })
    }

  }

  addStudent() {
    this.dataservice.addStudent(this.student).subscribe();
    window.location.reload();
  }

  updateStudent() {
    console.log(this.student.studentId, this.student);
    this.dataservice.updateStudent(this.student.studentId, this.student).subscribe();
    this.router.navigate(['']).then(() => {
      window.location.reload();
    });
  }

  closeClick() {
    window.location.reload();
    this.router.navigate(['']);
  }
}
