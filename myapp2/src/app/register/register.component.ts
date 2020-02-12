import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors, FormBuilder } from '@angular/forms';
import { CustomValidators } from '../myValidators/customvalidators';
import {UserService} from '../services/user-service.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public userForm:FormGroup;

  public get email(){
    return this.userForm.get('email')
  }  

  public get password(){
    return this.userForm.get('password')
  }

  public get name(){
    return this.userForm.get('name')
  }

  constructor(private fb:FormBuilder, 
    private userService:UserService,
    private router:Router) { }

  ngOnInit(): void {

    this.userForm = this.fb.group({
      email: ['', Validators.required, CustomValidators.checkUser],
      password: ['', [Validators.required, Validators.minLength(6)]],
      name: ['',  [Validators.required, CustomValidators.shouldNotContainSpaces]]
    })
     

    // this.userForm = new FormGroup({
    //   email: new FormControl('', Validators.required, CustomValidators.checkUser),
    //   password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    //   name : new FormControl('',  [Validators.required, CustomValidators.shouldNotContainSpaces])
    // })
  }


  

  handleRegister(){
    //console.log('Submit is clicked')
    //console.log(this.userForm)
    this.userService.registerUser(this.userForm.value)
        .subscribe(
          (response)=>{
            console.log(response)
            console.log(response.headers.get('x-auth-token'))
            localStorage.setItem('token', response.headers.get('x-auth-token') )
            this.router.navigate(['/'])
          },
          (error)=>{
            console.log(error)
          }
        )
  }

}
