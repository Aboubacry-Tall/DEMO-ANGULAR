import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories = {
    info : "Informatiques",
    rom : "Romances",
    pnl : "Développement Personnel",
    hist : "Histoires",
    edu : "Educations",
    jeux : "Jeux"
  }

  constructor(private router : Router) { }

  ngOnInit(): void {
  }


  findCategorie(categorie : string){
    this.router.navigate(['categorie',categorie]);
  }

}
