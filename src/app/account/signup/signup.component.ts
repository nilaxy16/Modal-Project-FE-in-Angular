import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import ValidateForm from 'src/app/helpers/ValidateForm';
import { DataServiceService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  type: string = 'Password';
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";

  signUpForm!: FormGroup;

  constructor(private fb: FormBuilder, private auth: DataServiceService, private router: Router) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group ({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }

  onSignup() {
    if(this.signUpForm.valid) {
      console.log(this.signUpForm.value);

      this.auth.signUp(this.signUpForm.value).subscribe({ 
        next: (res => { 
          alert(res.message);
          this.signUpForm.reset();
          this.router.navigate(['login']);
        }),
        error: (err => { alert(err?.error.message) })
      })
    }
    else {
      ValidateForm.validateAllFormFeilds(this.signUpForm);
    }
  }

}
