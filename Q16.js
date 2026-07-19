"use strict";
class EntertainmentPlatform {
}
class MovieManagement extends EntertainmentPlatform {
    static movieCounter = 0;
    getPlatformType() {
        console.log("Movie Management Platform");
    }
    addMovie() {
        MovieManagement.movieCounter++;
        console.log("Movie added.");
        return MovieManagement.movieCounter;
    }
    removeMovie() {
        MovieManagement.movieCounter--;
        console.log("Movie removed.");
        return MovieManagement.movieCounter;
    }
}
const cinema = new MovieManagement();
cinema.getPlatformType();
console.log("Movie Count: " + cinema.addMovie());
console.log("Movie Count: " + cinema.removeMovie());
