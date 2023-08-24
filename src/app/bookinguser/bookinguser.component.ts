import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertyService } from '../property.service';
import { BookingService } from '../booking.service';
import { Booking } from '../booking';

@Component({
  selector: 'app-bookinguser',
  templateUrl: './bookinguser.component.html',
  styleUrls: ['./bookinguser.component.scss']
})
export class BookinguserComponent implements OnInit {
  //@ts-ignore
  bookingForm: FormGroup;
  bookingData: any;
  id?: string;

  constructor(private formBuilder: FormBuilder,
    private bookingservice: BookingService,
    private router: Router,
    private route: ActivatedRoute){
      
    }
  

  ngOnInit(): void {
    this.bookingForm = this.formBuilder.group({
      bookingId: [''],
      dateTime: [''],
      inquiry: [''],
      user: this.formBuilder.group({firstName: [''], email: ['']}),
      propertyId: ['']

    });

    
    //created branch and updated code
    //@ts-ignore
    this.id = this.route.snapshot.paramMap.get('bookingId');
    console.log(this.id);


    if(this.id !== null){
      //@ts-ignore
      //this.bookingservice.getBookingById(this.id).subscribe((bookingData: Booking)=>{
        //this.bookingForm.patchValue(this.bookingData);
      //});
      this.bookingservice.getBookingById(this.id).subscribe((bookingData: Booking)=>{
        this.bookingForm.patchValue(bookingData);   
      });
    } 
  } 

  
  saveBooking():void{
    this.bookingData = this.bookingForm.value
    // Set the userId from the form data
    //this.bookingData.userId = this.bookingForm.value.userId;
    this.bookingservice.saveBooking(this.bookingData).subscribe((message:string)=>{
      console.log(message);
      this.router.navigate(['propertylistuser']);

    })
  } 

  saveBooking1():void{
    const booking = this.bookingForm.value;
    this.bookingservice.saveBooking(booking).subscribe((message: string)=>{
      this.router.navigate(['']);

    })
  }

}