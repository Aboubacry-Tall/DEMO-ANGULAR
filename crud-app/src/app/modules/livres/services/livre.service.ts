import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Favoris } from '../../achats/models/favoris';
import { Livre } from '../models/livre';

@Injectable({
  providedIn: 'root'
})
export class LivreService {

  public dataForm!:  FormGroup;
  private UrlApi = "http://localhost:8080/lib/livres";
  private UrlApi2 = "http://localhost:8080/lib/livreupload";
  private favorisUrl = "http://localhost:8080/lib";


  constructor(private httpClient: HttpClient) { }
  
  getAllLivres(): Observable<Livre[]>{
    return this.httpClient.get<Livre[]>(this.UrlApi);
  }

  getLivre(id? : number): Observable<Livre>{
    return this.httpClient.get<Livre>(`${this.UrlApi}/${id}`);
  }

  getCategorieLivre(categorie? : string): Observable<Livre[]>{
    return this.httpClient.get<Livre[]>(`${this.UrlApi+"/Categories"}/${categorie}`);
  }

  getSearchedLivre(key? : string): Observable<Livre[]>{
    return this.httpClient.get<Livre[]>(`${this.UrlApi+"/Recherches/"}?key=${key}`);
  }

  deleteLivre(id? : number): Observable<Object>{
    return this.httpClient.delete(`${this.UrlApi}/${id}`);
  }

  addLivre(formData: FormData): Observable<any> {
    return this.httpClient.post(this.UrlApi2, formData);
  }

  updateLivre(id : number, formData: FormData): Observable<Object>{
    return this.httpClient.put(`${this.UrlApi2}/${id}`,formData);
  }

  public favoris(favori: Favoris): Observable<Favoris>{
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(favori);
    return this.httpClient.post<Favoris>(this.favorisUrl + "/favoris", body, {'headers':headers});
  }

  public getFavoris(): Observable<Favoris[]>{
    return this.httpClient.get<Favoris[]>(this.favorisUrl + "/favorisList");
  }

  public defavoris(id: number): Observable<Object>{
    return this.httpClient.delete(this.favorisUrl + "/defavoris/" + id);
  }
}
