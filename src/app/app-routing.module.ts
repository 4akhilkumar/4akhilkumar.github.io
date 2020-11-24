import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent }from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BooktravelComponent } from './booktravel/booktravel.component';
import { BooktourComponent } from './booktour/booktour.component';
import { BookhospitalityComponent } from './bookhospitality/bookhospitality.component';
import { TravelComponent } from './travel/travel.component';
import { TourismComponent } from './tourism/tourism.component';
import { HospitalityComponent } from './hospitality/hospitality.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DonateComponent } from './donate/donate.component';
import { DonationformComponent } from './donationform/donationform.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'welcome',component:WelcomeComponent},
  {path:'travel',component:TravelComponent},
  {path:'tourism',component:TourismComponent},
  {path:'hospitality',component:HospitalityComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'booktravel/:name',component:BooktravelComponent,canActivate:[AuthGuard]},
  {path:'booktour/:name',component:BooktourComponent,canActivate:[AuthGuard]},
  {path:'bookhospitality/:name',component:BookhospitalityComponent,canActivate:[AuthGuard]},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]},
  {path:'aboutus',component:AboutusComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'donate',component:DonateComponent},
  {path:'donationform',component:DonationformComponent,canActivate:[AuthGuard]},
  {path:'',component:WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }