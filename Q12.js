"use strict";
class Booking {
    bookingId;
    movieName;
    seatNumber;
    constructor(bookingId, movieName, seatNumber) {
        this.movieName = movieName;
        this.bookingId = bookingId;
        this.seatNumber = seatNumber;
    }
    display() {
        console.log(this.movieName);
        console.log(this.bookingId);
        console.log(this.seatNumber);
    }
}

const book = new Booking(445, "Spyder", 4512);
book.display();
