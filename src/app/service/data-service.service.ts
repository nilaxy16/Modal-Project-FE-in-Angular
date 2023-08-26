import { Injectable } from '@angular/core';
import { Student } from '../Modal/Student';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Department } from '../Modal/Department';
import { Course } from '../Modal/Course';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  APIUrl = environment.apiKey;

  constructor(private http: HttpClient, private router: Router) {
    console.log(this.APIUrl);
  }
  
  getStudentList(): Observable < Student[] > {
    return this.http.get < Student[] > (this.APIUrl + '/Student');
  }
  addStudent(val: Student) {
    return this.http.post(this.APIUrl + '/Student', val);
  }
  getStudentById(id: string): Observable < Student > {
    return this.http.get < Student > (this.APIUrl + '/Student/'+ id);
  }
  updateStudent(id: string, val: Student) {
    return this.http.put(this.APIUrl + '/Student/'+ id, val);
  }
  deleteStudent(id: any) {
    return this.http.delete(this.APIUrl + '/Student/' + id);
  }
  getDepartmentList(): Observable < Department[] > {
    return this.http.get < Department[] > (this.APIUrl + '/Department');
  }
  getDepartmentById(id: string): Observable < Department > {
    return this.http.get < Department > (this.APIUrl + '/Department/' + id);
  }
  getDeptmentNames(): Observable<[]> {
    return this.http.get <[]> (this.APIUrl + '/Department/GetDepartmentsName');;
  }
  getCourseList(): Observable < Course[] > {
    return this.http.get < Course[] > (this.APIUrl + '/Course');
  }
  getCourseById(id: string): Observable < Course[] > {
    return this.http.get < Course[] > (this.APIUrl + '/Course/' + id);
  }
  addCourse(val: Course) {
    return this.http.post(this.APIUrl + '/Course', val);
  }

  signUp(userObj: any) {
    return this.http.post<any>(this.APIUrl + '/Auth/register', userObj)
  }

  login(loginObj: any) {
    return this.http.post<any>(this.APIUrl + '/Auth/login', loginObj)
  }

  storeToken(tokenValue: string) {
    localStorage.setItem('token', tokenValue);
  }

  getToken() {
    localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
