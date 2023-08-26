import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import ValidateForm from 'src/app/helpers/ValidateForm';
import { DataServiceService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  type: string = 'Password';
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder,  private auth: DataServiceService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group ({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }

  onLogin() {
    if(this.loginForm.valid) {
      console.log(this.loginForm.value);

      this.auth.login(this.loginForm.value).subscribe({ 
        next: (res) => { 
          alert(res.message);
          this.loginForm.reset();
          this.auth.storeToken(res.token);
          this.router.navigate(['home']);
        }, 
        error: (err) => { alert(err?.error.message) } 
      })
    }
    else {
      ValidateForm.validateAllFormFeilds(this.loginForm);
      alert("Your form is invalid");
    }
  }

}
