import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Property } from './property';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  url: string ='http://localhost:8080/property'

  constructor(private http:HttpClient) { }

  getPropertyList():Observable<Property[]>{
    console.log("get all properties")
    return this.http.get<Property[]>(this.url);
  }

  addProperty(property:Property):Observable<Property[]>{
    //@ts-ignore
    return this.http.post<Property[]>(this.url, property, {responseType:'text'})
  }
}
