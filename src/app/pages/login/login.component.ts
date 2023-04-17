import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { CurrentUser, LoginUserDTO } from 'src/app/services/auth/login/LoginUserDTO';

import { LoginService } from 'src/app/services/auth/login/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup | any;
  title = 'material-login';
  constructor(
    private router: Router,
    private loginService: LoginService,
    private cookieService : CookieService
  ) {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }
  ngOnInit(): void {
  }
  onSubmit() {
    if (this.loginForm.valid) {
      const loginData = new LoginUserDTO(
        this.loginForm.controls.username.value,
        this.loginForm.controls.password.value
      );
      this.loginService.loginUser(loginData).subscribe(res => {
        console.log(res.status)
        // console.log(res.data)
        // console.log(res.message)
        
        if (res.status == '200' ){
          const currentUser = new CurrentUser(
            res.data.user_id,
            res.data.user_first_name,
            res.data.user_last_name,
            res.data.user_position
          );
          this.cookieService.set('TW-Cookie',res.data.token,res.data.token_expiretime*60)
          this.loginService.setCurrentUser(currentUser);
          this.loginForm.reset()
          this.router.navigate(['meeting'])
        }
      })

    }
    //   localStorage.setItem('user',this.loginForm.value)
    //   this.router.navigate(['/home'])
  }
}