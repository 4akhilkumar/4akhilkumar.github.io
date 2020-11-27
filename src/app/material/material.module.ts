import { NgModule } from '@angular/core';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatListModule } from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import { MatSliderModule } from '@angular/material/slider';
import {MatDialogModule} from '@angular/material/dialog';

const Materialcomponents=[MatDialogModule,MatCarouselModule,MatSliderModule,MatTableModule,MatGridListModule,MatListModule,MatPaginatorModule,MatSnackBarModule,MatStepperModule,MatCheckboxModule,MatToolbarModule, MatCardModule,MatButtonModule,MatInputModule,MatFormFieldModule,MatIconModule,MatSelectModule,MatTabsModule,MatSidenavModule];
@NgModule({
  
  imports: [
    Materialcomponents
  ],
  exports :[
    Materialcomponents
  ]
})
export class MaterialModule { }
