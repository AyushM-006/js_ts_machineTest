//array destructuring
movieName = ["SpiderMan","Hulk","Dhurandhar"]

const [SpiderMan,Hulk,Dhurandhar] = movieName

console.log(movieName[1]);

console.log(SpiderMan);

//obj destructuring
const movie = {
    name:"SpiderMan",
    rating:5,
    genre:"Action"
}

const {name,rating,genre} = movie
console.log(movie.name);

console.log(name);

