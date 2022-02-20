import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
apidatalist:any=[]
  constructor(private service:AppService) { }

  ngOnInit(): void {
    this.fetchata();
  }

  fetchata(){
    this.service.getapidata().subscribe(
      res => {
        this.apidatalist = res;
        console.log(this.apidatalist)
      },
      err => console.log(err)
    )
  }

}
