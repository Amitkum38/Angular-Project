import { NgModule } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';




@NgModule({
  imports: [MatCheckboxModule, MatRadioModule, MatFormFieldModule, MatInputModule, MatSidenavModule, MatButtonModule],
  exports: [MatCheckboxModule, MatRadioModule, MatFormFieldModule, MatInputModule, MatSidenavModule, MatButtonModule]
})
export class MaterialModule { }
