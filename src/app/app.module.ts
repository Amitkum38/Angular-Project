import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule }   from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarLeftComponent } from './navbar-left/navbar-left.component';
import { TableComponent } from './table/table.component';
import { ChildPageComponent } from './child-page/child-page.component';
import { ParentPageComponent } from './parent-page/parent-page.component';
import { CompOneComponent } from './app-comonent-one/app-comonent-one.component';
import { AppComonentTwoComponent } from './app-comonent-two/app-comonent-two.component';
import { DataCommunicationComponent } from './data-communication/data-communication.component';
import { AppComonentThreeComponent } from './app-comonent-three/app-comonent-three.component';
import { AppComonentFourComponent } from './app-comonent-four/app-comonent-four.component';
import { ToggleComponent } from './toggle/toggle.component';
import { ActiveButtonComponent } from './active-button/active-button.component';
import { RecordsPageComponent } from './records-page/records-page.component';
import { ArrayTableValueComponent } from './array-table-value/array-table-value.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MaterialFormFieldComponent } from './material-form-field/material-form-field.component';








@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarLeftComponent,
    TableComponent,
    ChildPageComponent,
    ParentPageComponent,
    CompOneComponent,
    AppComonentTwoComponent,
    DataCommunicationComponent,
    AppComonentThreeComponent,
    AppComonentFourComponent,
    ToggleComponent,
    ActiveButtonComponent,
    RecordsPageComponent,
    ArrayTableValueComponent,
    MaterialFormFieldComponent,

  
    

    

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
