import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-left',
  templateUrl: './navbar-left.component.html',
  styleUrls: ['./navbar-left.component.css']
})


export class NavbarLeftComponent implements OnInit {
  activemenu:number;
  ngOnInit(): void {}
   constructor() { }
  
   activeclass(num){
    this.activemenu = num
   }
  }



  