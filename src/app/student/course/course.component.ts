import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/Modal/Course';
import { DataServiceService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courses: Course[] = [];
  course: Course = new Course();
  departments: any;

  constructor(private dataservice: DataServiceService) { }

  ngOnInit(): void {
    this.dataservice.getCourseList().subscribe(data => {
      this.courses = data;
    });
    this.dataservice.getDeptmentNames().subscribe(data => {
      this.departments = data;
    })
  }

  addCourse() {
    this.dataservice.addCourse(this.course).subscribe();
    window.location.reload();
  }

}
