interface MovieBooking{
    bookTicket(status:Boolean):void
}
class Viewer1 implements MovieBooking{
    name: String;
    id: Number;
    constructor(name: String, id: Number){
        this.name = name;
        this.id = id;
    }
    bookTicket(status:Boolean): void {
        if(status){ 
        console.log("Ticket booked successfully!");
        }else{
            console.log("Ticket booking failed!");
        }
    }   
}

const v2 = new Viewer1("John Doe", 123);
v2.bookTicket(true);