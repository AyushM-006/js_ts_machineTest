function bookTicket(status) {
  return new Promise((resolve, reject) => {
    if (status) {
      resolve("Booked succesfully");
    } else {
      reject("Booking failed");
    }
  });
}

//Async Await
async function TicketCounter() {
  try {
    const book = await bookTicket(1);
    if (book) {
      console.log(book);
    }
  } catch (error) {
    console.log(error);
  }
}
TicketCounter();

//then catch
bookTicket()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
