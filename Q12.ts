class Booking {
  bookingId: Number;
  movieName: String;
  seatNumber: Number;

  constructor(bookingId: Number, movieName: String, seatNumber: Number) {
    this.movieName = movieName;
    this.bookingId = bookingId;
    this.seatNumber = seatNumber;
  }
  display(){
    console.log(this.movieName);
    console.log(this.bookingId);
    console.log(this.seatNumber);
    
    
    
  }
}
const book = new Booking(445,"Spyder",4512)
book.display()
