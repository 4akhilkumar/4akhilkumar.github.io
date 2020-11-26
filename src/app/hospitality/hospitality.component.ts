import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HyattComponent } from '../hospitalityplaces/hyatt/hyatt.component';
import { InterComponent } from '../hospitalityplaces/inter/inter.component';
import { MarriottComponent } from '../hospitalityplaces/marriott/marriott.component';
import { RadissonComponent } from '../hospitalityplaces/radisson/radisson.component';
import { ShangriComponent } from '../hospitalityplaces/shangri/shangri.component';
import { TajComponent } from '../hospitalityplaces/taj/taj.component';
import { LalitComponent } from '../hospitalityplaces/lalit/lalit.component';
import { LeelaComponent } from '../hospitalityplaces/leela/leela.component';
import { OberoiComponent } from '../hospitalityplaces/oberoi/oberoi.component';

@Component({
  selector: 'app-hospitality',
  templateUrl: './hospitality.component.html',
  styleUrls: ['./hospitality.component.css']
})
export class HospitalityComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
  
  openDialogHyatt(){
    this.dialog.open(HyattComponent,{width:'500px',height:'700px'})
  }
  openDialogInter(){
    this.dialog.open(InterComponent,{width:'500px',height:'700px'})
  }
  openDialogMarriott(){
    this.dialog.open(MarriottComponent,{width:'500px',height:'700px'})
  }
  openDialogRadisson(){
    this.dialog.open(RadissonComponent,{width:'500px',height:'700px'})
  }
  openDialogShangri(){
    this.dialog.open(ShangriComponent,{width:'500px',height:'700px'})
  }
  openDialogTaj(){
    this.dialog.open(TajComponent,{width:'500px',height:'700px'})
  }
  openDialogLalit(){
    this.dialog.open(LalitComponent,{width:'500px',height:'700px'})
  }
  openDialogLeela(){
    this.dialog.open(LeelaComponent,{width:'500px',height:'700px'})
  }
  openDialogOberoi(){
    this.dialog.open(OberoiComponent,{width:'500px',height:'700px'})
  }
  ngOnInit(): void {
  }

}
