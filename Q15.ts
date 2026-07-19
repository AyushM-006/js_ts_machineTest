function getMovieInfo<T>(info: T): T {
    return info;
}
const movieName: String = "Inception";
const movieId: Number = 101;
const genre: String = "Science Fiction";
const rating: Number = 8.8;

console.log(getMovieInfo<String>(movieName));
console.log(getMovieInfo<Number>(movieId));
console.log(getMovieInfo<String>(genre));
console.log(getMovieInfo<Number>(rating));
