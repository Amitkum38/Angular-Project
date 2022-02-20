import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-app-comonent-four',
  templateUrl: './app-comonent-four.component.html',
  styleUrls: ['./app-comonent-four.component.css']
})
export class AppComonentFourComponent implements OnInit {
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





