import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TajmahalComponent } from '../tourismplaces/tajmahal/tajmahal.component';
import { VaranasiComponent } from '../tourismplaces/varanasi/varanasi.component';
import { HarmandirComponent } from '../tourismplaces/harmandir/harmandir.component';
import { JaisalmerComponent } from '../tourismplaces/jaisalmer/jaisalmer.component';
import { RedfortComponent } from '../tourismplaces/redfort/redfort.component';
import { GoiComponent } from '../tourismplaces/goi/goi.component';
import { MeccamasjidComponent } from '../tourismplaces/meccamasjid/meccamasjid.component';
import { AmerfortComponent } from '../tourismplaces/amerfort/amerfort.component';
import { BogComponent } from '../tourismplaces/bog/bog.component';
import { PeriyarComponent } from '../tourismplaces/periyar/periyar.component';
import { AgrafortComponent } from '../tourismplaces/agrafort/agrafort.component';
import { ElloracavesComponent } from '../tourismplaces/elloracaves/elloracaves.component';

@Component({
  selector: 'app-tourism',
  templateUrl: './tourism.component.html',
  styleUrls: ['./tourism.component.css']
})
export class TourismComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
  
  openDialogAgrafort(){
    this.dialog.open(AgrafortComponent,{width:'500px',height:'700px'})
  }
  openDialogAmerfort(){
    this.dialog.open(AmerfortComponent,{width:'500px',height:'700px'})
  }
  openDialogBog(){
    this.dialog.open(BogComponent,{width:'500px',height:'700px'})
  }
  openDialogElloracaves(){
    this.dialog.open(ElloracavesComponent,{width:'500px',height:'700px'})
  }
  openDialogGoi(){
    this.dialog.open(GoiComponent,{width:'500px',height:'700px'})
  }
  openDialogHarmandir(){
    this.dialog.open(HarmandirComponent,{width:'500px',height:'700px'})
  }
  openDialogJaisalmer(){
    this.dialog.open(JaisalmerComponent,{width:'500px',height:'700px'})
  }
  openDialogMeccamasjid(){
    this.dialog.open(MeccamasjidComponent,{width:'500px',height:'700px'})
  }
  openDialogPeriyar(){
    this.dialog.open(PeriyarComponent,{width:'500px',height:'700px'})
  }
  openDialogRedfort(){
    this.dialog.open(RedfortComponent,{width:'500px',height:'700px'})
  }
  openDialogTajmahal(){
    this.dialog.open(TajmahalComponent,{width:'500px',height:'700px'})
  }
  openDialogVaranasi(){
    this.dialog.open(VaranasiComponent,{width:'500px',height:'700px'})
  }

  ngOnInit(): void {
  }
}