import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user-service.service';

@Injectable({
  providedIn: 'root'
})
export class MovieGuard implements CanActivate {
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean |UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log('route guard is checking')
    
      if(this.userService.isLoggedIn()){
        return true;
      }else{
        this.router.navigate(['/login'])
        return false;
      }
  }

  constructor(private userService:UserService, private router:Router) { }
}
