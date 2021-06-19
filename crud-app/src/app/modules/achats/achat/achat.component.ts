import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from '../../users/models/user';
import { ContratComponent } from '../contrat/contrat.component';

@Component({
  selector: 'app-achat',
  templateUrl: './achat.component.html',
  styleUrls: ['./achat.component.css']
})
export class AchatComponent implements OnInit {

  user: User = new User();
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  emailConfirmation(){
      if(localStorage.getItem('userEmail')){
        if(this.user.email === localStorage.getItem('userEmail')){
          this.openDialog();
        }else{

        }
      }else{
        alert("no");
        //sauvegarder la page courante
        //Redirection vers la page de connexion
      }
  }

  openDialog() {
    const dialogRef = this.dialog.open(ContratComponent, {width: '700px'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
