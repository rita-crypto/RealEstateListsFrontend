import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booking } from './booking';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  url: string = 'http://localhost:8080/booking';

  constructor(private http: HttpClient) { }

  getBookingById(bookingId:Booking):Observable<Booking>{
    console.log('get booking by bookingId')
    return this.http.get<Booking>(this.url.concat('/').concat(String(bookingId)));
  }

  saveBooking(booking: Booking): Observable<string>{
    //@ts-ignore
    return this.http.post<Booking[]>(this.url, booking, {responseType: 'text'})
  }

}
