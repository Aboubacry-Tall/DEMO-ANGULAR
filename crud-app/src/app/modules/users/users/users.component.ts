import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  user: User = new User();
  nom='';
  constructor(private userService: UserDataService,private router: Router) { }
  ngOnInit(): void {
    
  }
  
  updateUser(id?:number){
    this.router.navigate(['user',id]);
  }
  Activer(id?:number, user?: User){
    this.userService.Activate(id,user).subscribe(data =>{
    })
    this.router.navigate(['admin-users'])
  }
  Suspendre(id?:number, user?: User){
    this.userService.Suspended(id,user).subscribe(data =>{
    })
    this.router.navigate(['admin-users'])
  }
  Rechercher(){
    this.userService.findUser(this.nom).subscribe(data =>{
      this.users=data;
    });
  }
  onSearch(event:any){
    this.userService.findUser(this.nom).subscribe(data =>{
      this.users=data;
    });

  }


}
