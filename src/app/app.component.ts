import { Component, OnInit } from '@angular/core';
import { CurrentUser } from './services/auth/login/LoginUserDTO';
import { LoginService } from './services/auth/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'TaxWorkgroup';
  constructor(
    private loginService:LoginService
  ){}
  ngOnInit(): void {
    console.log('-------------------------')
    this.loginService.checkUserAuth().subscribe(res=>{
      console.log('checkUserAuth'+res)
      const user = new CurrentUser(
        res.data.user_id,
        res.data.user_first_name,
        res.data.user_last_name,
        res.data.user_position);
      this.loginService.setCurrentUser(user)

      
    })
  }

}
