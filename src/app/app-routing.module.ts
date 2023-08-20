import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyListComponent } from './property-list/property-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewpropertyListComponent } from './newproperty-list/newproperty-list.component';

const routes: Routes = [
  {path: '', component: PropertyListComponent},
  {path: 'new', component: NewpropertyListComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule, ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
