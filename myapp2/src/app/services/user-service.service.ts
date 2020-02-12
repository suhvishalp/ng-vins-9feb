import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment'
import {JwtHelper} from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = environment.apiEndPoint;

  constructor(private http:HttpClient) { }

  public registerUser(user){
    return this.http.post(this.apiUrl+ 'users', user, {observe:'response'})
  }

  public login(user){
    return this.http.post(this.apiUrl+ 'auth', user, {responseType:'text'})
  }

  isLoggedIn(){
    const token = localStorage.getItem('token');
    return !token ? false : true;
  }

  public get currentUser(){
    const token = localStorage.getItem('token')
    const helper = new JwtHelper();
    if(token && !helper.isTokenExpired(token)){
        return helper.decodeToken(token)
    }

    return null;
  }
  
}
