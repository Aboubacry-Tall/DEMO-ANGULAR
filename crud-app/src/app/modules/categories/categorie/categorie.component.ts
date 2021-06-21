import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livre } from '../../livres/models/livre';
import { LivreService } from '../../livres/services/livre.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  categorie! : string;
  livres! : Livre[];

  constructor(private livreervice: LivreService,private route : ActivatedRoute,private router : Router) { }

  ngOnInit(): void {
    this.categorie = this.route.snapshot.params['categorie'];
    this.livreervice.getCategorieLivre(this.categorie).subscribe(data => {
      this.livres=data;
    },err => console.log(err));
  }

  detailsLivre(id? : number){
    this.router.navigate(['livre',id]);
  }
}
