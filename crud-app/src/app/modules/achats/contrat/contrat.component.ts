import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-contrat',
  templateUrl: './contrat.component.html',
  styleUrls: ['./contrat.component.css']
})
export class ContratComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ContratComponent>) { }

  ngOnInit(): void {
  }

  refuserConditions() : void {
    this.dialogRef.close();
  }

  accepterConditions() : void {
    
  }
}