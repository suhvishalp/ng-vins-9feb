import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
  }

  login(loginForm){
    //console.log('Form is Submitted...')
    //communicate to server...
    //console.log(loginForm)
    this.userService.login(loginForm.value)
        .subscribe(
          (response)=>{
            console.log(response)
            localStorage.setItem('token', response)
            this.router.navigate(['/'])
          },
          (error)=>{console.log(error)}
        )
  }
}
