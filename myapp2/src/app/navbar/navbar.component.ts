import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user-service.service';
import {environment} from '../../environments/environment'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navbarStyle = environment.navStyle;

  constructor(public userService:UserService) { }

  ngOnInit(): void {
  }

}
