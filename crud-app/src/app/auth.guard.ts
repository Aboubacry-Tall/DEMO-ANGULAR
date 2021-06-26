import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserDataService } from './modules/users/services/user-data.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private userService: UserDataService,private router: Router){}
  canActivate(): boolean{
    if(this.userService.loggedin()!=null && this.userService.loggedin()=='0'){
      return true;
    }else{
    this.router.navigate(['/login']);
    return false;
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private userService: UserDataService,private router: Router){}
  canActivate(): boolean{
    if(this.userService.loggedin()!=null){
      return true;
    }else{
    this.router.navigate(['home']);
    return false;
    }
  }
}
@Injectable({
  providedIn: 'root'
})
export class VisitorGuard implements CanActivate {
  constructor(private userService: UserDataService,private router: Router){}
  canActivate(): boolean{
    if(this.userService.loggedin()==null){
      return true;
    }else{
      this.router.navigate(['home']);
      return false;
    }
  }
}

