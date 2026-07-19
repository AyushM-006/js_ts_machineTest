//Q17

const movie = [
  { name: "ABCD", ratings: 4 },
  { name: "Spyder", ratings: 6 },
  { name: "Dhurandhar", ratings: 9 },
];
function findHighestRatedMovie(movie) {
  const highestRated = Math.max(...movie.map(m => m.ratings));
  return movie.filter(m => m.ratings == highestRated);
}

console.log(findHighestRatedMovie(movie));


//Q18

function filterMovies(movie) {
    return movie.filter(m => m.ratings > 5);
}

console.log(filterMovies(movie));


