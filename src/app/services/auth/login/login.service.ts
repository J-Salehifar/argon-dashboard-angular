import { ObserversModule } from '@angular/cdk/observers';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CurrentUser, IloginUserAccount, LoginUserDTO, checkUserAuth } from './LoginUserDTO';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private currentUser:BehaviorSubject<CurrentUser> = new BehaviorSubject<CurrentUser>({
    user_id:0,
    user_first_name: '',
    user_last_name:'',
    user_position:''
  });
  

  constructor(
    private http: HttpClient,
  ) { }

  
  setCurrentUser(user :CurrentUser):void {
    this.currentUser.next(user);
  }
  getCurrentUser():Observable<CurrentUser>{
    return this.currentUser
  }

  loginUser(loginUserDTO: LoginUserDTO): Observable<IloginUserAccount> {
    return this.http.post<IloginUserAccount>('/account/login/', loginUserDTO)
  }
  checkUserAuth():Observable<checkUserAuth> {
    console.log('-+-+-+-+-+-+-+-+-+-+-+-+-+-+')
    return this.http.post<checkUserAuth>('/account/check-user-auth/',null)
  }

}

