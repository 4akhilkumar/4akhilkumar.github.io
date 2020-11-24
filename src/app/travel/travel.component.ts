import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GoaComponent } from '../travelplaces/goa/goa.component';
import { McleodganjComponent } from '../travelplaces/mcleodganj/mcleodganj.component';
import { SrinagarComponent } from '../travelplaces/srinagar/srinagar.component';
import { AndamanComponent } from '../travelplaces/andaman/andaman.component';
import { LehladakhComponent } from '../travelplaces/lehladakh/lehladakh.component';
import { BinsarComponent } from '../travelplaces/binsar/binsar.component';
import { CoorgComponent } from '../travelplaces/coorg/coorg.component';
import { KeralaComponent } from '../travelplaces/kerala/kerala.component';
import { KanatalComponent } from '../travelplaces/kanatal/kanatal.component';
import { KasolComponent } from '../travelplaces/kasol/kasol.component';
import { KutchComponent } from '../travelplaces/kutch/kutch.component';
import { BirbillingComponent } from '../travelplaces/birbilling/birbilling.component';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
  
  openDialogGoa(){
    this.dialog.open(GoaComponent,{width:'500px',height:'700px'})
  }
  openDialogMcleodganj(){
    this.dialog.open(McleodganjComponent,{width:'500px',height:'700px'})
  }
  openDialogSrinagar(){
    this.dialog.open(SrinagarComponent,{width:'500px',height:'700px'})
  }
  openDialogAndaman(){
    this.dialog.open(AndamanComponent,{width:'500px',height:'700px'})
  }
  openDialogLehLadakh(){
    this.dialog.open(LehladakhComponent,{width:'500px',height:'700px'})
  }
  openDialogBinsar(){
    this.dialog.open(BinsarComponent,{width:'500px',height:'700px'})
  }
  openDialogCoorg(){
    this.dialog.open(CoorgComponent,{width:'500px',height:'700px'})
  }
  openDialogKerala(){
    this.dialog.open(KeralaComponent,{width:'500px',height:'700px'})
  }
  openDialogKanatal(){
    this.dialog.open(KanatalComponent,{width:'500px',height:'700px'})
  }
  openDialogKasol(){
    this.dialog.open(KasolComponent,{width:'500px',height:'700px'})
  }
  openDialogKutch(){
    this.dialog.open(KutchComponent,{width:'500px',height:'700px'})
  }
  openDialogBirBilling(){
    this.dialog.open(BirbillingComponent,{width:'500px',height:'700px'})
  }
  
  ngOnInit(): void {
  }
}