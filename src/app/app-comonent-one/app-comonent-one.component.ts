import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-app-comonent-one',
  templateUrl: './app-comonent-one.component.html',
  styleUrls: ['./app-comonent-one.component.css']
})
export class CompOneComponent implements OnInit {
  user:any = 'user one';
  constructor(private _service:AppService) { }

  ngOnInit(): void {
    this._service.subjectValue.subscribe(res => this.user = res);
  }

  updateUser(usevalue){
      this._service.subjectValue.next(usevalue.value);
      usevalue.value = ''
  }

}





