import { User } from "./user"

export class Booking {
    //@ts-ignore
    bookingId: number
    //@ts-ignore
    user: User
    propertyId?:number
    
    dateTime?: Date
    inquiry?: String

}
