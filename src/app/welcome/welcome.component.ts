import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  opened=false;
  
  constructor() { }

  ngOnInit(): void {
  }
}