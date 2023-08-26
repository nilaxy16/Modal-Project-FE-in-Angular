import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowStudentComponent } from './student/show-student/show-student.component';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { EditStudentComponent } from './student/edit-student/edit-student.component';
import { RouterModule } from '@angular/router';
import {  HttpClientModule } from '@angular/common/http';
import { StudentComponent } from './student/student.component';
import { DepartmentComponent } from './student/department/department.component';
import { CourseComponent } from './student/course/course.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './account/login/login.component';
import { SignupComponent } from './account/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowStudentComponent,
    AddStudentComponent,
    EditStudentComponent,
    StudentComponent,
    DepartmentComponent,
    CourseComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
