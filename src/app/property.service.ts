import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Property } from './property';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  url: string ='http://localhost:8080/property';

  constructor(private http:HttpClient) { }

  getPropertyList():Observable<Property[]>{
    console.log("get all properties")
    return this.http.get<Property[]>(this.url);
  }

  deleteProperty(propertyId:number):Observable<string>{
    console.log('delete property')
    //@ts-ignore
    return this.http.delete<string>(this.url.concat('/').concat(String(propertyId)), {responseType:'text'});
  }

  addProperty(property:Property):Observable<string>{
    //@ts-ignore
    return this.http.post<Property[]>(this.url, property, {responseType:'text'})
  }

  getPropertyById(propertyId:Property):Observable<Property>{
    console.log('get property by propertyId')
    return this.http.get<Property>(this.url.concat('/').concat(String(propertyId)));
  }

    updateProperty(propertyId:string, property: Property): Observable<string>{
      //@ts-ignore
      return this.http.put<string>(this.url.concat('/').concat(propertyId), property, {responseType: 'text'});
    }
}
