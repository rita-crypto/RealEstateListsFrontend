import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url:string = 'http://localhost:8080/users'

  constructor(private http: HttpClient) { }

  login(user: User): Observable<string>{
    //@ts-ignore
    return this.http.post<string>(this.url.concat('/login'), user, {responseType: 'text'});
  }

  loginadmin(user: User): Observable<string>{
    //@ts-ignore
    return this.http.post<string>(this.url.concat('/loginadmin'), user, {responseType: "text"})
  }

  register(user: User): Observable<string>{
    //@ts-ignore
    return this.http.post<string>(this.url.concat('/register'), user, {responseType: 'text'});
  }
  
}
