import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PropertyListComponent } from './property-list/property-list.component';
import { NewpropertyListComponent } from './newproperty-list/newproperty-list.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { PropertylistuserComponent } from './propertylistuser/propertylistuser.component';
import { BookinguserComponent } from './bookinguser/bookinguser.component';


@NgModule({
  declarations: [
    AppComponent,
    PropertyListComponent,
    NewpropertyListComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    LoginadminComponent,
    PropertylistuserComponent,
    BookinguserComponent,
  
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
