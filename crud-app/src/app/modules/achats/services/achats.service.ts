import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBuy } from '../models/ibuy';

@Injectable({
  providedIn: 'root'
})
export class AchatsService {
  buyURL:  string = "http://localhost:8080/";

  constructor(private http: HttpClient) { }

  buyLivre(buy:IBuy): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(buy);
    console.log(body)
    return this.http.post(this.buyURL + 'lib/buy', body, {'headers':headers})
  }

  public getBuys(): Observable<IBuy[]> {
    return this.http.get<IBuy[]>(this.buyURL + 'lib/buys');
  }
}
