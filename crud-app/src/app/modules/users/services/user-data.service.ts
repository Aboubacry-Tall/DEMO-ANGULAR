import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private baseUrl = "http://localhost:8080/lib/users";
  private Url = "http://localhost:8080/lib/";

  constructor(private http: HttpClient) { }
  getUsers(): Observable<any>{
    return this.http.get(this.baseUrl)

    }
    createUser(user: User):Observable<Object>{
      return this.http.post(this.Url+'user',user);
  }
  loginUserForm(user: User):Observable<any>{
    return this.http.post(this.Url+'login',user);
  }
   loggedin(){
     return localStorage.getItem('userId');
   }
   getUserById(id?:number):Observable<User>{
    return this.http.get<User>(`${this.Url+'find'}/${id}`);
   }
   UpdateUser(id?:number, user?: User):Observable<Object>{
     return this.http.put<Object>(`${this.Url+'user'}/${id}`,user);
   }
   Activate(id?:number, user?: User):Observable<Object>{
    return this.http.put<Object>(`${this.Url+'active'}/${id}`,user);
   }
   Suspended(id?:number, user?: User):Observable<Object>{
    return this.http.put<Object>(`${this.Url+'suspendre'}/${id}`,user);
   }
}
