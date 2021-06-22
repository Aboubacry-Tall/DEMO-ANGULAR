import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Livre } from 'src/app/modules/livres/models/livre';
import { LivreService } from 'src/app/modules/livres/services/livre.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  Livres!: Livre[] ;
  erreur = null;
  notFound = "";

  constructor(private fb: FormBuilder,public livreservice : LivreService,private router : Router) { }

  ngOnInit(): void {
    this.livreservice.dataForm= this.fb.group({
      id: null,
      search: ['', ],});
      
  }

  onSubmit(){
      this.notFound="";
      console.log(this.livreservice.dataForm.value['search']);
      this.livreservice.getSearchedLivre(this.livreservice.dataForm.value['search']).subscribe(data => {
      this.Livres = data;
    if(this.Livres.length == 0)
    { this.notFound="recherche non trouvé !!!"}; 
    },
      err => {this.router.navigate(['erreur'])});

  }

  detailsLivre(id? : number){
    this.router.navigate(['livre',id]);
  }

  onSearch(event:any){
    this.notFound="";
      console.log(this.livreservice.dataForm.value['search']);
      this.livreservice.getSearchedLivre(this.livreservice.dataForm.value['search']).subscribe(data => {
      this.Livres = data;
    if(this.Livres.length == 0)
    { this.notFound="recherche non trouvé !!!"}; 
    },
      err => {this.router.navigate(['erreur'])});
  }


}
