"use strict";
class Viewer1 {
    name;
    id;
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    bookTicket(status) {
        if (status) {
            console.log("Ticket booked successfully!");
        }
        else {
            console.log("Ticket booking failed!");
        }
    }
}

const v2 = new Viewer1("John Doe", 123);
v2.bookTicket(true);
