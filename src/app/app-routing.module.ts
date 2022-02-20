import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';
import { ChildPageComponent } from './child-page/child-page.component';
import { ParentPageComponent } from './parent-page/parent-page.component';
import { DataCommunicationComponent } from './data-communication/data-communication.component';
import { ToggleComponent } from './toggle/toggle.component';
import { ActiveButtonComponent } from './active-button/active-button.component';
import { RecordsPageComponent } from './records-page/records-page.component';
import { ArrayTableValueComponent } from './array-table-value/array-table-value.component';
import { MaterialFormFieldComponent } from './material-form-field/material-form-field.component';




const routes: Routes = [
  {path:'', redirectTo:'MaterialForm', pathMatch:'full'},
  {path:'MaterialForm',  component:MaterialFormFieldComponent},
  {path:'Table',  component:TableComponent},
  {path:'ChildPage',  component:ChildPageComponent},
  {path:'ParentPage',  component:ParentPageComponent},
  {path:'DataComm',  component:DataCommunicationComponent},
  {path:'TogglePage',  component:ToggleComponent},
  {path:'Activebutton',  component:ActiveButtonComponent},
  {path:'recordspage',  component:RecordsPageComponent},
  {path:'ArrayTableValue',  component:ArrayTableValueComponent},
  


  

  
  

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
