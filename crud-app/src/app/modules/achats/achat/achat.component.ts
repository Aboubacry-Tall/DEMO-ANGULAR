import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { User } from '../../users/models/user';
import { ContratComponent } from '../contrat/contrat.component';

@Component({
  selector: 'app-achat',
  templateUrl: './achat.component.html',
  styleUrls: ['./achat.component.css']
})
export class AchatComponent implements OnInit {

  user: User = new User();
  constructor(public dialog: MatDialog, private route : Router) {}

  ngOnInit(): void {
  }

  emailConfirmation(){
      if(localStorage.getItem('userEmail')){
        if(this.user.email === localStorage.getItem('userEmail')){
          this.openDialog();
        }else{
          alert("Veuillez saisir votre adresse e-mail valide");
        }
      }else{
        //sauvegarder la page courante
        this.route.navigate(['login']); 
      }
  }

  openDialog() {
    const dialogRef = this.dialog.open(ContratComponent, {width: '700px'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
