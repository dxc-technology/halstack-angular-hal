import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.scss']
})
export class OverviewPageComponent implements OnInit {

  imgDxc:string; 

  imgGithub:string;

  constructor(){

  }

  ngOnInit() { 
     this.imgGithub = '../../../assets/img/github-logo.png';
     this.imgDxc = '../../../assets/img/dxclogo.png';
    
  }


}
