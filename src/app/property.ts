import { Location } from "./location";

export class Property {
//@ts-ignore
    propertyId: number;
    title?: String;
    description?: String;
    propertyType?: String;
    price?: number;
    area?: number
    location?:Location
    numberOfBedrooms?: number;
    numberOfBathrooms?:number;
    propertyStatus?: String;
    listingDate?: Date;
    lastUpdateDate?: Date;
}
