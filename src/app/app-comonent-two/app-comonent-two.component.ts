import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-app-comonent-two',
  templateUrl: './app-comonent-two.component.html',
  styleUrls: ['./app-comonent-two.component.css']
})
export class AppComonentTwoComponent implements OnInit {
  user:any = 'user Two';
  constructor(private _service:AppService) { }

  ngOnInit(): void {
    this._service.subjectValue.subscribe(res => this.user = res);
  }

  updateUser(usevalue){
      this._service.subjectValue.next(usevalue.value);
      usevalue.value = ''
  }

}
