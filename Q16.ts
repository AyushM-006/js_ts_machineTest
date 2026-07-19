interface MovieOperations {
  addMovie(): void;
  removeMovie(): void;
}
abstract class EntertainmentPlatform {
  abstract getPlatformType(): void;
}

class MovieManagement extends EntertainmentPlatform implements MovieOperations {
    static movieCounter: number = 0;
  getPlatformType(): void {
    console.log("Movie Management Platform");
  }

  addMovie(): Number {
    MovieManagement.movieCounter++;
    console.log("Movie added.");
    return MovieManagement.movieCounter;
  }

  removeMovie(): Number {
    MovieManagement.movieCounter--;
    console.log("Movie removed.");
    return MovieManagement.movieCounter;
  }
}

const cinema = new MovieManagement();
cinema.getPlatformType();
console.log("Movie Count: " + cinema.addMovie());
console.log("Movie Count: " + cinema.removeMovie());


const ott = new MovieManagement();
ott.getPlatformType();
console.log("Movie Count: " + ott.addMovie());
console.log("Movie Count: " + ott.removeMovie());


