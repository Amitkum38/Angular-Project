import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-records-page',
  templateUrl: './records-page.component.html',
  styleUrls: ['./records-page.component.css']
})

export class RecordsPageComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

 todoListArr:any=[]
  @ViewChild('todo', {static:false}) myInput:ElementRef
  
   addrecored(todovalue){
    this.todoListArr.push(todovalue);
    this.myInput.nativeElement.value = ''
  }

  
}