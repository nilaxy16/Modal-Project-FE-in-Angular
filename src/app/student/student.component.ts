import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../service/data-service.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private auth: DataServiceService) { }

  ngOnInit(): void {
  }

  logout() {
    this.auth.logout();
  }

}
