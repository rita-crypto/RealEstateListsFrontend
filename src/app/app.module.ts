import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PropertyListComponent } from './property-list/property-list.component';
import { NewpropertyListComponent } from './newproperty-list/newproperty-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertyListComponent,
    NewpropertyListComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
