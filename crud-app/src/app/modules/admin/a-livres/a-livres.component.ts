import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Livre } from '../../livres/models/livre';
import { LivreService } from '../../livres/services/livre.service';

@Component({
  selector: 'app-a-livres',
  templateUrl: './a-livres.component.html',
  styleUrls: ['./a-livres.component.css']
})
export class ALivresComponent implements OnInit {

  Livres!: Livre[] ;
  livre : Livre = new Livre();
  livreBckup : any;
  messageSucess = "null";
  messageErroe = "null";
  FileImg= new File([""],"");
  FileDoc=new File([""],"");
  docURL :any;
  titre="debut";

  constructor(public fb: FormBuilder,private router: Router,public livreservice: LivreService) { }

  ngOnInit(): void {
    this.getLivres();
    this.infoForm();
    //this.livreservice.dataForm.patchValue({titre:this.livreBckup['titre']});

  }

  private getLivres(){
    this.livreservice.getAllLivres().subscribe(data => {
      this.Livres = data;
    });
  }

  onSubmit(){
    this.addData();
  }

  detailsLivre(id? : number){
    this.router.navigate(['livre',id]);
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


  addData() {
    const formData = new  FormData();
    const livre = this.livreservice.dataForm.value;
    console.log(livre);
    formData.append('livre',JSON.stringify(livre));
    formData.append('img',this.FileImg);
    formData.append('doc',this.FileDoc);
    console.log(formData);
    this.livreservice.addLivre(formData).subscribe( data => {
      // 
      this.messageSucess=" livre ajouté avec succes "
    },
    error => {
      this.router.navigate(['admin-livres']);
      this.messageErroe='livre deja existe ou données incorrectes ';
      
  });
  }


  infoForm() {
    this.livreservice.dataForm = this.fb.group({
        id: null,
        titre: ['', Validators.required],
        categorie: ['', [Validators.required]],
        prix: [0, [Validators.required]], 
        statut: ['gratuit', [Validators.required]],
        isbn: ['', [Validators.required,Validators.minLength(10),Validators.maxLength(13),Validators.pattern('^[0-9]*$')]],
        auteur: ['', [Validators.required]],
        editeur: ['', [Validators.required]],
        dates: ['', [Validators.required]],
        couverture: ['', [Validators.required]],
        document: ['', [Validators.required]],
        resume: ['', ]
        
      });

    }

    get getControl(){
      return this.livreservice.dataForm.controls;
    }

}
