import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../users/models/user';
import { UserDataService } from '../../users/services/user-data.service';

@Component({
  selector: 'app-a-users',
  templateUrl: './a-users.component.html',
  styleUrls: ['./a-users.component.css']
})
export class AUsersComponent implements OnInit {

  users: User[] = [];
  user: User = new User();
  constructor(private userService: UserDataService,private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }
  private getUsers() {
    this.userService.getUsers().subscribe(data =>{
      this.users=data;
    });
  }
  updateUser(id?:number){
    this.router.navigate(['user',id]);
  }
  Activer(id?:number, user?: User){
    this.userService.Activate(id,user).subscribe(data =>{
    })
    window.location.reload();
  }
  Suspendre(id?:number, user?: User){
    this.userService.Suspended(id,user).subscribe(data =>{
    })
    window.location.reload();
  }
}
