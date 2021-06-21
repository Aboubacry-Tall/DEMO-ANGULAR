import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../../modules/users/services/user-data.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private userService: UserDataService,private router: Router) { }

  ngOnInit(): void {
    this.UserId();
  }
  UserId(){
    return localStorage.getItem('userId');
  }
  updateUser(userId:string |null){
    this.router.navigate(['user',userId]);
  }
  logout(){
    localStorage.removeItem('userId');
    this.router.navigate(['/login']);
  }
}
