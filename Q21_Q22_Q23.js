//Q21

const calculateTicketPrice = (price) => {
  return price - (price * 10) / 100;
};

console.log(calculateTicketPrice(500));

//Q22
const ratings = [4, 6, 7, 3, 9];
const increaseRatings = function (ratings) {
  return ratings.map((ratings) => ratings + 1);
};
console.log(increaseRatings(ratings));

//Q23

const movies = [
  {
    name: "Spiderman",
    genre: "Action",
  },
  {
    name: "Hulk",
    genre: "Action",
  },
  {
    name: "Nun",
    genre: "Horror",
  },
  {
    name: "Dhamaal",
    genre: "Comedy",
  }
];
function filterActionMovies(movies) {
    return movies.filter(m => m.genre =="Action" )
}
console.log(filterActionMovies(movies));

