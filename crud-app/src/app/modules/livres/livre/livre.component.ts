import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Favoris } from '../../achats/models/favoris';
import { IBuy } from '../../achats/models/ibuy';
import { AchatsService } from '../../achats/services/achats.service';
import { Livre } from '../models/livre';
import { LivreService } from '../services/livre.service';


@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})
export class LivreComponent implements OnInit {

  buys!:IBuy[];
  livreStatut = "payant";
  id? : number;
  livre: Livre = new Livre();
  favori: Favoris = new Favoris();
  favorisList!: Favoris[];
  favoriser = false;
  message = "null";
  FileImg= new File([""],"");
  FileDoc=new File([""],"");

  constructor(private fb: FormBuilder,private router : ActivatedRoute, public livreservice : LivreService,private route : Router, public achatsservice: AchatsService) { }

  ngOnInit(): void {
    this.getBuys();
    this.getFavoris();
    console.log(this.UserEmail());
    this.infoForm();
    this.id= this.router.snapshot.params['id'];
    sessionStorage.setItem('livreId', this.id + '');
    this.livreservice.getLivre(this.id).subscribe(
      data => {this.livre = data;

        this.livreservice.dataForm.patchValue({
          titre : this.livre.titre,
          categorie : this.livre.categorie,
          prix : this.livre.prix,
          statut : this.livre.statut,
          isbn : this.livre.isbn,
          auteur : this.livre.auteur,
          editeur : this.livre.editeur,
          dates : this.livre.dates,
          resume : this.livre.resume,
      });

        
        
      },
      error => {
       this.route.navigate(['erreur']); 
        console.log(error)});

        this.livreservice.dataForm.patchValue({
          titre : this.getControl.titre.value,
      });

  }

  onSubmit(){
    const formData = new  FormData();
    const livre = this.livreservice.dataForm.value;
    console.log(livre);
    formData.append('livre',JSON.stringify(livre));
    formData.append('img',this.FileImg);
    formData.append('doc',this.FileDoc);
    this.livreservice.updateLivre(this.router.snapshot.params['id'],formData).subscribe(
      data =>{window.location.reload();});

  }

  UserId(){
    return localStorage.getItem('userId');
  }

  UserEmail(){
    return localStorage.getItem('userEmail');
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

  onSetPrix(event: any){
    const prix = event.target.value;
    if(prix == '0'){
      this.getControl['statut'].setValue('gratuit');
    }else{
      this.getControl['statut'].setValue('payant');
    }
  }

  infoForm() {
    this.livreservice.dataForm = this.fb.group({
        id: null,
        titre: ['', Validators.required],
        categorie: ['', [Validators.required]],
        prix: ['', [Validators.required]], 
        statut: ['', [Validators.required]],
        isbn: ['', [Validators.required,Validators.minLength(10),Validators.maxLength(13),Validators.pattern('^[0-9]*$')]],
        auteur: ['', [Validators.required]],
        editeur: ['', [Validators.required]],
        dates: ['', [Validators.required]],
        couverture: ['', [Validators.required]],
        document: ['', [Validators.required]],
        resume: ['', ]
        
      });

  }

  public getBuys(){
    this.achatsservice.getBuys()
      .subscribe(data => {
        console.log(data)
        this.buys=data;
        this.buyDataConstroller();
      });   
  }

  public buyDataConstroller(){
    for (let buy of this.buys) {
      if (buy.livreId == sessionStorage.getItem('livreId') && buy.userId == localStorage.getItem('userId')) {
          sessionStorage.setItem("buy", "ok");
          this.livreStatut = "gratuit";
      }
    }  
  }

  public favorise(){
    this.favori.livreId = sessionStorage.getItem('livreId') + '';
    this.favori.userId = localStorage.getItem('userId') + '';
    this.livreservice.favoris(this.favori)
      .subscribe(data => {
        console.log(data)
      });  
      window.location.reload();
  }

  public getFavoris(){
    this.livreservice.getFavoris()
      .subscribe(data => {
        console.log(data)
        this.favorisList=data;
        this.favorisDataController();
      });   
  }

  public favorisDataController(){
    for (let favori of this.favorisList) {
      if (favori.livreId == sessionStorage.getItem('livreId') && favori.userId == localStorage.getItem('userId')) {
          this.favoriser = true;
          sessionStorage.setItem('favorisId', favori.id + '');
      }
    }  
    this.route.navigate(['livre',this.id]);
  }

  public defavorise(){
    this.favori.livreId = sessionStorage.getItem('livreId') + '';
    this.favori.userId = localStorage.getItem('userId') + '';
    this.favori.id = Number(sessionStorage.getItem('favorisId'));
    this.livreservice.defavoris(this.favori.id)
      .subscribe(data => {
        console.log(data)
      });  
      this.favoriser = true;
      window.location.reload();
  }

}
