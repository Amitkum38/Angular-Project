import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-app-comonent-three',
  templateUrl: './app-comonent-three.component.html',
  styleUrls: ['./app-comonent-three.component.css']
})
export class AppComonentThreeComponent implements OnInit {
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
