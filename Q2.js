"use strict";
class Movie {
    movieName;
    movieId;
    genre;
    rating;
    constructor(movieName, movieId, genre, rating) {
        this.movieName = movieName;
        this.movieId = movieId;
        this.genre = genre;
        this.rating = rating;
    }
    displayInfo() {
        console.log(this.movieName);
        console.log(this.movieId);
        console.log(this.rating);
        console.log(this.genre);
    }
}
const m1 = new Movie("ABCD", 555, "Comedy", 5);
m1.displayInfo();
