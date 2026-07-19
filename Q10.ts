class Viewer {
  viewerName: String;
  viewerId: Number;
  email: String;
  city: String;

  constructor(
    viewerName: String,
    viewerId: Number,
    email: String,
    city: String,
  ) {
    this.viewerName = viewerName;
    this.viewerId = viewerId;
    this.email = email;
    this.city = city;
  }
  displayInfo() {
    console.log(this.viewerName);
    console.log(this.viewerId);
    console.log(this.email);
    console.log(this.city);
  }
}

const v1 = new Viewer("John", 123, "john@example.com", "Mumbai");
v1.displayInfo();
