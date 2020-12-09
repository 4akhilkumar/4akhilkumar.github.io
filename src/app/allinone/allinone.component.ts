import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild} from '@angular/core';
import { MatPaginator} from '@angular/material/paginator';
import { MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData {
  name: string;
  position: number;
  price: number;
  location: string;
  type:string;
  book:string;
}

const ELEMENT_DATA: UserData[] = [
  
  {position: 1, type: 'Hospitality', name: 'Hyatt Hotels Corporation', price: 250, location: 'Mumbai', book:'/bookhospitality/TheGrandHyatt'},
  {position: 2, type: 'Tourism', name: 'The Taj Mahal', price: 25, location: 'Agra, India', book: '/booktour/Tajmahal'},
  {position: 3, type: 'Travel', name: 'Goa', price: 25, location: 'Goa, India', book: '/booktravel/Goa'},
  {position: 4, type: 'Tourism', name: 'Mumbai: The Gateway of India', price: 25, location: 'Mumbai, India', book: '/booktour/GateWayofIndia'},
  {position: 5, type: 'Hospitality', name: 'Shangri La Hotels & Resorts', price: 250, location: 'Singapore', book: '/bookhospitality/Shangri-LaHotel'},
  {position: 6, type: 'Hospitality', name: 'Taj Hotels,Resorts & Palaces', price: 250, location: 'Mumbai', book: '/bookhospitality/TheTajMahalPalace'},
  {position: 7, type: 'Hospitality', name: 'The Lalit Hotels', price: 250, location: 'New Delhi', book: '/bookhospitality/TheLalit'},
  {position: 8, type: 'Hospitality', name: 'The Leela Palace', price: 250, location: 'Chennai', book: '/bookhospitality/TheLeelaPalace'},
  {position: 9, type: 'Hospitality', name: 'The Oberoi', price: 250, location: 'New Delhi', book: '/bookhospitality/TheOberoi'},
  {position: 10, type: 'Hospitality', name: 'InterContinental Hotels', price: 250, location: 'Mumbai', book:'/bookhospitality/InterContinentalMarineDrive'},
  {position: 11, type: 'Tourism', name: 'The Holy City of Varanasi', price: 25, location: 'Varanasi, India', book: '/booktour/Varanasi'},
  {position: 12, type: 'Tourism', name: 'Harmandir Sahib', price: 25, location: 'Punjab, India', book: '/booktour/GoldenTemple'},
  {position: 13, type: 'Tourism', name: 'The Golden City: Jaisalmer', price: 25, location: 'Rajasthan, India', book: '/booktour/Jaisalmer'},
  {position: 14, type: 'Tourism', name: 'The Red Fort', price: 25, location: 'New Delhi, India', book: '/booktour/Redfort'},
  {position: 15, type: 'Hospitality', name: 'Radisson Blu Hotels', price: 250, location: 'Hyderabad', book: '/bookhospitality/RadissonBluHotels'},
  {position: 16, type: 'Tourism', name: 'Mecca Masjid', price: 25, location: 'Hyderabad, India', book: '/booktour/MeccaMasjid'},
  {position: 17, type: 'Tourism', name: 'Amer Fort', price: 25, location: 'Jaipur, India', book: '/booktour/AmerFort'},
  {position: 18, type: 'Tourism', name: 'The Beaches of Goa', price: 25, location: 'Goa, India', book: '/booktour/BeachesOfGoa'},
  {position: 19, type: 'Tourism', name: 'Periyar National Park', price: 25, location: 'Madurai, India', book: '/booktour/PeriyarNationalPark'},
  {position: 20, type: 'Tourism', name: 'Agra Fort', price: 25, location: 'Agra, India', book: '/booktour/AgraFort'},
  {position: 21, type: 'Tourism', name: 'The Ellora Caves', price: 25, location: 'Aurangabad, India', book: '/booktour/ElloraCaves'},
  {position: 22, type: 'Hospitality', name: 'Marriott International', price: 250, location: 'Bethesda', book: '/bookhospitality/MarriottInternational'},
  {position: 23, type: 'Travel', name: 'Mcleodganj', price: 25, location: 'McLeod Ganj, Kangra, Himachal Pradesh', book: '/booktravel/Mcleodganj'},
  {position: 24, type: 'Travel', name: 'Srinagar', price: 25, location: 'Srinagar, India', book: '/booktravel/Srinagar'},
  {position: 25, type: 'Travel', name: 'Andaman', price: 25, location: 'Andaman and Nicobar Islands', book: '/booktravel/Andaman'},
  {position: 26, type: 'Travel', name: 'Leh-Ladakh', price: 25, location: 'Leh Ladakh, Jammu and Kashmir, India', book: '/booktravel/Lehladakh'},
  {position: 27, type: 'Travel', name: 'Binsar', price: 25, location: 'Binsar, Uttarakhand, India', book: '/booktravel/Binsar'},
  {position: 28, type: 'Travel', name: 'Coorg', price: 25, location: 'Coorg, Madikeri, Karnataka', book: '/booktravel/Coorg'},
  {position: 29, type: 'Travel', name: 'Kerala', price: 25, location: 'Kerala, India', book: '/booktravel/Kerala'},
  {position: 30, type: 'Travel', name: 'Kanatal', price: 25, location: 'Kanatal, Uttarakhand, India', book: '/booktravel/Kanatal'},
  {position: 31, type: 'Travel', name: 'Kasol', price: 25, location: 'Kasol, Himachal Pradesh, India', book: '/booktravel/Kasol'},
  {position: 32, type: 'Travel', name: 'Kutch', price: 25, location: 'Kutch, Gujarat, India', book: '/booktravel/Kutch'},
  {position: 33, type: 'Travel', name: 'Bir Billing', price: 25, location: 'Bir Billing, Himachal Pradesh, India', book: '/booktravel/Birbilling'},
];

@Component({
  selector: 'app-allinone',
  templateUrl: './allinone.component.html',
  styleUrls: ['./allinone.component.css']
})
export class AllinoneComponent implements AfterViewInit {

  displayedColumns: string[] = ['position', 'type', 'name', 'location', 'price', 'book'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
  }
}