class Viewer {
  name: String;
  ticketId: Number;
  constructor(name: String, ticketId: Number) {
    this.name = name;
    this.ticketId = ticketId;
  }
}
class MovieTheatre {
  static totalViewers: any = 0;
  viewerList: Viewer[] = [];

  addViewer(viewer: Viewer) {
    this.viewerList.push(viewer)
    MovieTheatre.totalViewers++;
  }
  displayViewers(){
    console.log(this.viewerList);
  }

}

const v1 = new Viewer("Ayush",65451)
const v2 = new Viewer("Harry",7784)

const abc = new MovieTheatre()
console.log(MovieTheatre.totalViewers);

abc.addViewer(v1)
abc.addViewer(v2)
console.log(MovieTheatre.totalViewers);
abc.displayViewers()
