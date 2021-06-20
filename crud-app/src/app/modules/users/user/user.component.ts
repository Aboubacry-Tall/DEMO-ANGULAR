import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  panelOpenState = false
  id?:number;
  user:User = new User();
  msg?:string |null;

  constructor(private userService: UserDataService,private Activerouter: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.id=this.Activerouter.snapshot.params['id'];
    this.msg=localStorage.getItem('userId')
    if(this.id+""==this.msg || this.msg=='0'){
      this.userService.getUserById(this.id).subscribe(data =>{
        this.user = data; 
    },
    error => console.log(error)); 
  }else{
    this.router.navigate(['home'])
  }
  }
  updateUser(){
    this.userService.UpdateUser(this.id, this.user).subscribe(data =>{
      console.log(data);
      window.location.reload();
    },
    error =>console.log(error));
  }
}
