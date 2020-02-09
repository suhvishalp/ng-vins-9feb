import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public companyName: string;
  public logoImageUrl: string;
  public bgColor: string = 'orange'
  public isActive:boolean = false;

  constructor() { }

  ngOnInit(): void {
    //initialize data members/properties of your class 
    this.companyName = 'KHDA'
    this.logoImageUrl = 'assets/logo.png'

    setTimeout(() => {
      this.companyName = 'Knowledge & Human Development Authority'
      this.isActive = true;
    }, 6000);
  }

  handleShowClick($event){
    console.log('Button is Clicked...')
    console.log($event)
  }

  handleRightClick($event){
    $event.preventDefault();
    alert('Right click not allowed...')
  }

}
