import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  login(loginForm){
    console.log('Form is Submitted...')
    
    //communicate to server...
    console.log(loginForm)
  }
}
