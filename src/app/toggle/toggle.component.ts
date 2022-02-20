import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})

export class ToggleComponent implements OnInit {
  addmyclasstext:boolean;
  addtogglemenu:boolean;

  ngOnInit(): void {
    this.addmyclasstext = false;
    this.addtogglemenu = false;
  
  }

  toggleclass(){
     this.addmyclasstext = !this.addmyclasstext
 }

  togglemenu(){
    this.addtogglemenu = !this.addtogglemenu
  }



   

  
}
