import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowStudentComponent } from './student/show-student/show-student.component';
import { EditStudentComponent } from './student/edit-student/edit-student.component';
import { StudentComponent } from './student/student.component';
import { DepartmentComponent } from './student/department/department.component';
import { CourseComponent } from './student/course/course.component';
import { LoginComponent } from './account/login/login.component';
import { SignupComponent } from './account/signup/signup.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {path:'' , redirectTo: 'login', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path:'signup', component: SignupComponent},
  {path:'home' , component: StudentComponent, canActivate: [AuthGuard],
    children: [
      {path: '', component: ShowStudentComponent},
      {path: 'student', component: ShowStudentComponent},
      {path: 'department', component: DepartmentComponent},
      {path: 'course', component: CourseComponent}
    ]
  },
  {path:'edit/:id' , component: EditStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
