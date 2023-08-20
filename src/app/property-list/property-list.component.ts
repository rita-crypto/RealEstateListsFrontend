import { Component } from '@angular/core';
import { Property } from '../property';
import { PropertyService } from '../property.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent {

  propertyList: Property[]=[];

constructor(private propertyService:PropertyService){
  console.log('Inside constructor')
  
}
  ngOnInit():void{
    console.log("component initialized..");
    this.propertyService.getPropertyList().subscribe((property: Property[])=>{
      this.propertyList=property;
      console.log(this.propertyList);
    })
  }

  ngOnDestroy():void{
    
  }

}
