import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-page',
  templateUrl: './parent-page.component.html',
  styleUrls: ['./parent-page.component.css']
})
export class ParentPageComponent implements OnInit {

  // DATA FROM CHILD TO PARENT
  dataformchild:any;
  constructor() { }
  ngOnInit(): void {}

}
