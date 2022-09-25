import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  userLogin: boolean = false;
  notAdminLogin: boolean = false;
  accessAllow: boolean = false;
  userDetails: any;
  constructor(private http: HttpClient, private route: Router) {}

  getEmployeeDetials(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getToken() {
    return sessionStorage.getItem('token') != null ? true : false;
  }

  isLoggedIn(): boolean {
    if (this.accessAllow) {
      return true;
    } else {
      return false;
    }
    // else {
    //   return !!this.getToken();
    // }
  }
  public login(val: any, params: string) {
    // const adminData = JSON.parse(localStorage.getItem(admin));
    // sessionStorage.setItem('token', params);
    sessionStorage.setItem('username', val.name);
    sessionStorage.setItem('password', val.password);
    sessionStorage.setItem('data', JSON.stringify(val));
    return this.accessAllow;
  }

  logout() {
    this.accessAllow = false;
    sessionStorage.removeItem('token');
    this.route.navigate(['login/log-out']);
  }

  loginAccess(val: any) {
    const adminName = localStorage.getItem('user_name');
    const adminPass = localStorage.getItem('password');
    console.log('params', val, adminName, adminPass);
    if (val.username == adminName && val.password == adminPass) {
      sessionStorage.setItem('token', 'adminABC123');
      this.accessAllow = true;
      this.userDetails = 'admin';
    } else if (
      val.username == sessionStorage.getItem('username') &&
      val.password == sessionStorage.getItem('password')
    ) {
      sessionStorage.setItem('token', 'notAdminABC123');
      this.accessAllow = false;
      this.userDetails = 'notAdmin';
    } else {
      this.accessAllow = false;
    }
    return this.userDetails;
  }
}
