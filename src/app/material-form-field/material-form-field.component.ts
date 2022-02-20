import { Component, OnInit } from '@angular/core';
import {FormControl,  Validators} from '@angular/forms';


@Component({
  selector: 'app-material-form-field',
  templateUrl: './material-form-field.component.html',
  styleUrls: ['./material-form-field.component.css']
})
export class MaterialFormFieldComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {}
  checkboxshow:boolean = false;
  checkboxshow2:boolean = false;
  Gendername = "Male";

   emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);






  

 

}
