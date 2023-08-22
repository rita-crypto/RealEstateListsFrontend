import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyListComponent } from './property-list/property-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewpropertyListComponent } from './newproperty-list/newproperty-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'list', component: PropertyListComponent},
  {path: 'new', component: NewpropertyListComponent},
  {path: 'update/:propertyId', component: NewpropertyListComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule, ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
