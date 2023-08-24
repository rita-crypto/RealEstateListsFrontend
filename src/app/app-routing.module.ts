import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyListComponent } from './property-list/property-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewpropertyListComponent } from './newproperty-list/newproperty-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { PropertylistuserComponent } from './propertylistuser/propertylistuser.component';
import { BookinguserComponent } from './bookinguser/bookinguser.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'loginadmin', component: LoginadminComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'list', component: PropertyListComponent},
  {path: 'new', component: NewpropertyListComponent},
  {path: 'propertylistuser', component: PropertylistuserComponent},
  {path: 'propertylistuser/:propertyId', component: BookinguserComponent},
  {path: 'update/:propertyId', component: NewpropertyListComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule, ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
