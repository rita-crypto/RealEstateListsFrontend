import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PropertyService } from '../property.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from '../property';

@Component({
  selector: 'app-newproperty-list',
  templateUrl: './newproperty-list.component.html',
  styleUrls: ['./newproperty-list.component.scss']
})
export class NewpropertyListComponent implements OnInit {
  //@ts-ignore
  propertyForm: FormGroup;
  propertyData: any;
  id?: string;

  constructor(private formBuilder: FormBuilder,
    private propertyService: PropertyService,
    private router: Router,
    private route: ActivatedRoute){

  }

  ngOnInit(): void{
    this.propertyForm = this.formBuilder.group({
      propertyId: [''],
      title: [''],
      description: [''],
      propertyType: [''],
      price: [''],
      area: [''],
      location: this.formBuilder.group({city: [''], state: [''], zipCode: ['']}),
      numberOfBedrooms: [''],
      numberOfBathrooms: [''],
      propertyStatus: [''],
      listingTodaysDate: [''],
      lastUpdateDate: ['']

    });
    //@ts-ignore
    this.id = this.route.snapshot.paramMap.get('propertyId');
    console.log(this.id);

    if(this.id !== null)
    {
      //@ts-ignore
      this.propertyService.getPropertyById(this.id).subscribe((propertyData: Property)=>{
        this.propertyForm.patchValue(propertyData);   
      });
    }
  }

  saveProperty(): void{
    this.propertyData=this.propertyForm.value
    this.propertyData.active=this.propertyData.active ? 'Yes': 'No';
    if(this.id === null){
      this.propertyService.addProperty(this.
        propertyData).subscribe((message:string) =>{
        console.log(message);
        this.router.navigate(['/list']);
      });
    }
    else{
      //@ts-ignore
      this.propertyService.updateProperty(this.id, this.propertyData).subscribe((message:string)=>{
      console.log(message);
      this.router.navigate(['/list']);
      });
      
    }
  }

}



