import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../property.service';
import { Property } from '../property';
import { Router } from '@angular/router';

@Component({
  selector: 'app-propertylistuser',
  templateUrl: './propertylistuser.component.html',
  styleUrls: ['./propertylistuser.component.scss']
})
export class PropertylistuserComponent implements OnInit {
  
  propertyListUser: Property[]=[];

  constructor(private propertyService: PropertyService,
    private router: Router){

  }

  ngOnInit(): void {
    this.getPropertyList();
  }

  getPropertyList(): void{
    this.propertyService.getPropertyList().subscribe((property: Property[])=>{
      this.propertyListUser=property;
      console.log(this.propertyListUser);
    })
  }

  bookProperty(propertyId: number): void {
    this.router.navigate(['/propertylistuser/book'], {
      queryParams: {
        propertyId: propertyId,
        userFirstName: 'firstName',
        userEmail: 'email',
        userId: 'userId'
      }
    });

  
}


}
