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
  userEmail='';
  msg='null';
    constructor(private userService: UserDataService,private router: Router) { }
  
    ngOnInit(): void {
    }
    loginUser(){
      this.userService.loginUser(this.user).subscribe(data=>{
        console.log(data);
        if(data==true){
          this.userService.loginUserForm(this.user).subscribe(response => {
            this.user=response;
            if(this.user.statut=='Active'){
              this.userId=this.user.id+"";
              this.userEmail=this.user.email+"";

              if(this.userId=='0'){
                localStorage.setItem('userId',this.userId);
                localStorage.setItem('userEmail',this.userEmail);
                this.goToAdmin();
              }

              if(this.userId!='0'){
              localStorage.setItem('userId',this.userId);
              localStorage.setItem('userEmail',this.userEmail);
              this.goToUser();
              }
            }else{
              this.msg='Vous etes suspendu'
            }
          },
          error =>console.log(error)); 
        }else{
          this.msg='Email ou mot de passe incorrect'
        }
      })
 }
      
    goToUser(){
      this.router.navigate(['home']);
    }
    goToAdmin(){
      this.router.navigate(['admin']);
    }
}
