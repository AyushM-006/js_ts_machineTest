const bookings = [
  { name: "Ayush", price: 500 },
  { name: "Rohit", price: 1000 },
  { name: "Ramesh", price: 1500 },
];
function totalTicketRevenue(bookings) {
  return bookings.reduce((total, booking) => total + booking.price, 0);
}
