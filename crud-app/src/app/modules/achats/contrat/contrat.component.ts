import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { User } from '../../users/models/user';
import { IBuy } from '../models/ibuy';
import { AchatsService } from '../services/achats.service';

@Component({
  selector: 'app-contrat',
  templateUrl: './contrat.component.html',
  styleUrls: ['./contrat.component.css']
})
export class ContratComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ContratComponent>, public achatsservice: AchatsService, private route : Router) { }

  user: User = new User();
  buy = new IBuy();
  
  ngOnInit(): void {
  }

  refuserConditions() : void {
    this.dialogRef.close();
  }

  accepterConditions() : void {
    this.buy.livreId = sessionStorage.getItem('livreId') + '';
    this.buy.userId = localStorage.getItem('userId') + '';
    this.achatsservice.buyLivre(this.buy)
      .subscribe(data => {
        console.log(data)
      });
      this.route.navigate(['livre',this.buy.livreId]); 
  }
}