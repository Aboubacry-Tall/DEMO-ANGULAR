import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../modules/users/models/user';
import { UserDataService } from '../../modules/users/services/user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User =new User();
  userId='';
  msg='null';
    constructor(private userService: UserDataService,private router: Router) { }
  
    ngOnInit(): void {
    }
    loginUser(){
      this.userService.loginUserForm(this.user).subscribe(data => {
        console.log(data);
        this.user=data;
        if(this.user){
          this.userId=this.user.id+"";
          var userStatus=this.user.statut;
          if(userStatus=="Active" && this.userId=='0'){
          localStorage.setItem('userId',this.userId);
          this.goToAdmin();
          }
          if(userStatus=="Active" && this.userId!='0'){
          localStorage.setItem('userId',this.userId);
          this.goToUser();
          }
        }
      },
      error =>console.log(error));
            this.msg='Email ou mot de passe invalide';
    }
    goToUser(){
      this.router.navigate(['']);
    }
    goToAdmin(){
      this.router.navigate(['admin']);
    }
}
