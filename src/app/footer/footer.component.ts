import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  OpenMyGitHubAccount(){
    window.open("https://github.com/4akhilkumar", '_blank');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
