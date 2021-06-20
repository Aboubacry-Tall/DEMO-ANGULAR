import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Livre } from '../models/livre';
import { LivreService } from '../services/livre.service';


@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})
export class LivreComponent implements OnInit {

  id? : number;
  livre: Livre = new Livre();
  message = "null";
  FileImg= new File([""],"");
  FileDoc=new File([""],"");

  constructor(private fb: FormBuilder,private router : ActivatedRoute, public livreservice : LivreService,private route : Router) { }

  ngOnInit(): void {

    this.id= this.router.snapshot.params['id'];
    this.livreservice.getLivre(this.id).subscribe(
      data => {this.livre = data;
        this.livreservice.dataForm= this.fb.group({
          id: null,
          titre: [this.livre.titre, Validators.required],
          categorie: [this.livre.categorie, [Validators.required]],
          prix: [this.livre.prix, [Validators.required]],
          isbn: [this.livre.isbn, [Validators.required]],
          auteur: [this.livre.auteur, [Validators.required]],
          editeur: [this.livre.editeur, [Validators.required]],
          couverture: ['', [Validators.required]],
          document: ['', [Validators.required]],
          resume: [this.livre.resume, ]
          
        });
      },
      error => {
       this.route.navigate(['erreur']); 
        console.log(error)});


      

  }

  onSubmit(){
    const formData = new  FormData();
    const livre = this.livreservice.dataForm.value;
    console.log(livre);
    formData.append('livre',JSON.stringify(livre));
    formData.append('img',this.FileImg);
    formData.append('doc',this.FileDoc);
    this.livreservice.updateLivre(this.router.snapshot.params['id'],formData).subscribe(
      data =>{this.redirectLivres();});

  }

  redirectLivres(){
    this.route.navigate(['livre',this.id]);
    
  }

  get getControl(){
    return this.livreservice.dataForm.controls;
  }

  onSelectFileImg(event : any){
    if (event.target.files.length > 0)
    {
      const file = event.target.files[0];
      this.FileImg = file;
      console.log("image loaded ...");
    }
  }

  
  onSelectFileDoc(event: any){
    const file = event.target.files[0];
    this.FileDoc = file;
    console.log("document loaded ...");
  }


}
