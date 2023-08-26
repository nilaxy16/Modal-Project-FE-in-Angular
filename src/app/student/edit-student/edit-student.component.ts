import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/Modal/Student';
import { DataServiceService } from 'src/app/service/data-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  editstudent: Student = new Student();
  id: any;

  constructor(private router: Router, private dataservice: DataServiceService, private _Activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this._Activatedroute.snapshot.paramMap.get('id');
    this.dataservice.getStudentById(this.id).subscribe(data => {
      this.editstudent = data;
    });
    console.log(this.editstudent);
  }

  updateStudent() { 
    this.dataservice.updateStudent(this.editstudent.studentId, this.editstudent).subscribe();
    this.router.navigate(['']).then(() => {
      window.location.reload();
    });
  }

  deleteClick(student: Student){
    if(confirm('Are you sure??')){
      this.dataservice.deleteStudent(student.studentId).subscribe();
      window.location.reload();
    }
  } 

  closeClick() {
    this.router.navigate(['']);
  }
}
