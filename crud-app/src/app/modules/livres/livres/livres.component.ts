import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Livre } from '../models/livre';
import { LivreService } from '../services/livre.service';

@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html',
  styleUrls: ['./livres.component.css']
})
export class LivresComponent implements OnInit {

  Livres!: Livre[] ;

  
  constructor(public livreservice : LivreService,private router : Router) { }

  ngOnInit(): void {
    this.getLivres();
  }

  private getLivres(){
    this.livreservice.getAllLivres().subscribe(data => {
      this.Livres = data; });
  }

  detailsLivre(id? : number){
    this.router.navigate(['livre',id]);
  }
}
