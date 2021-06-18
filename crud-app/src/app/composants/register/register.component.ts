import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../modules/users/models/user';
import { UserDataService } from '../../modules/users/services/user-data.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user : User = new User();
  msg='null';
    constructor(private userService : UserDataService, private router: Router) { }
  
    ngOnInit(): void {
    }
  
    saveUser(){
      this.userService.createUser(this.user).subscribe(data =>{
        console.log(data);
        this.goToUser();
      },
      error =>console.log(error));
      this.msg='Cette email est deja utilise ou cet compte existe deja';
    }
  
    goToUser(){
      this.router.navigate(['']);
    }
  

}
