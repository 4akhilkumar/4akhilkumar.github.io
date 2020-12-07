import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomeComponent } from './welcome/welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HospitalityComponent } from './hospitality/hospitality.component';
import { TravelComponent } from './travel/travel.component';
import { TourismComponent } from './tourism/tourism.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from './footer/footer.component';
import { DonateComponent } from './donate/donate.component';
import { DonationformComponent } from './donationform/donationform.component';
import { ContactusComponent } from './contactus/contactus.component';
import { BooktravelComponent } from './booktravel/booktravel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GoaComponent } from './travelplaces/goa/goa.component';
import { McleodganjComponent } from './travelplaces/mcleodganj/mcleodganj.component';
import { SrinagarComponent } from './travelplaces/srinagar/srinagar.component';
import { CoorgComponent } from './travelplaces/coorg/coorg.component';
import { KeralaComponent } from './travelplaces/kerala/kerala.component';
import { KanatalComponent } from './travelplaces/kanatal/kanatal.component';
import { KasolComponent } from './travelplaces/kasol/kasol.component';
import { KutchComponent } from './travelplaces/kutch/kutch.component';
import { LehladakhComponent } from './travelplaces/lehladakh/lehladakh.component';
import { AndamanComponent } from './travelplaces/andaman/andaman.component';
import { BinsarComponent } from './travelplaces/binsar/binsar.component';
import { BirbillingComponent } from './travelplaces/birbilling/birbilling.component';
import { TajmahalComponent } from './tourismplaces/tajmahal/tajmahal.component';
import { VaranasiComponent } from './tourismplaces/varanasi/varanasi.component';
import { HarmandirComponent } from './tourismplaces/harmandir/harmandir.component';
import { JaisalmerComponent } from './tourismplaces/jaisalmer/jaisalmer.component';
import { RedfortComponent } from './tourismplaces/redfort/redfort.component';
import { GoiComponent } from './tourismplaces/goi/goi.component';
import { MeccamasjidComponent } from './tourismplaces/meccamasjid/meccamasjid.component';
import { AmerfortComponent } from './tourismplaces/amerfort/amerfort.component';
import { BogComponent } from './tourismplaces/bog/bog.component';
import { PeriyarComponent } from './tourismplaces/periyar/periyar.component';
import { AgrafortComponent } from './tourismplaces/agrafort/agrafort.component';
import { ElloracavesComponent } from './tourismplaces/elloracaves/elloracaves.component';
import { BooktourComponent } from './booktour/booktour.component';
import { HyattComponent } from './hospitalityplaces/hyatt/hyatt.component';
import { InterComponent } from './hospitalityplaces/inter/inter.component';
import { MarriottComponent } from './hospitalityplaces/marriott/marriott.component';
import { RadissonComponent } from './hospitalityplaces/radisson/radisson.component';
import { ShangriComponent } from './hospitalityplaces/shangri/shangri.component';
import { TajComponent } from './hospitalityplaces/taj/taj.component';
import { LalitComponent } from './hospitalityplaces/lalit/lalit.component';
import { LeelaComponent } from './hospitalityplaces/leela/leela.component';
import { BookhospitalityComponent } from './bookhospitality/bookhospitality.component';
import { TraveldashboardComponent } from './traveldashboard/traveldashboard.component';
import { TourdashboardComponent } from './tourdashboard/tourdashboard.component';
import { HospitalitydashboardComponent } from './hospitalitydashboard/hospitalitydashboard.component';
import { DonationdashboardComponent } from './donationdashboard/donationdashboard.component';
import { TermsandconditionsComponent } from './termsandconditions/termsandconditions.component';
import { OberoiComponent } from './hospitalityplaces/oberoi/oberoi.component';
import { AllinoneComponent } from './allinone/allinone.component';
import { ProfileComponent } from './profile/profile.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { DeleteaccountComponent } from './deleteaccount/deleteaccount.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    WelcomeComponent,
    HospitalityComponent,
    TravelComponent,
    TourismComponent,
    AboutusComponent,
    FooterComponent,
    DonateComponent,
    DonationformComponent,
    ContactusComponent,
    BooktravelComponent,
    DashboardComponent,
    GoaComponent,
    McleodganjComponent,
    SrinagarComponent,
    CoorgComponent,
    KeralaComponent,
    KanatalComponent,
    KasolComponent,
    KutchComponent,
    LehladakhComponent,
    AndamanComponent,
    BinsarComponent,
    BirbillingComponent,
    TajmahalComponent,
    VaranasiComponent,
    HarmandirComponent,
    JaisalmerComponent,
    RedfortComponent,
    GoiComponent,
    MeccamasjidComponent,
    AmerfortComponent,
    BogComponent,
    PeriyarComponent,
    AgrafortComponent,
    ElloracavesComponent,
    BooktourComponent,
    HyattComponent,
    InterComponent,
    MarriottComponent,
    RadissonComponent,
    ShangriComponent,
    TajComponent,
    LalitComponent,
    LeelaComponent,
    BookhospitalityComponent,
    TraveldashboardComponent,
    TourdashboardComponent,
    HospitalitydashboardComponent,
    DonationdashboardComponent,
    TermsandconditionsComponent,
    OberoiComponent,
    AllinoneComponent,
    ProfileComponent,
    EditprofileComponent,
    DeleteaccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }