import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-active-button',
  templateUrl: './active-button.component.html',
  styleUrls: ['./active-button.component.css']
})


export class ActiveButtonComponent implements OnInit {
  activetab:number;
  ngOnInit(): void {}
   constructor() { }
  
   addclass(num){
    this.activetab = num
   }
  }



  


