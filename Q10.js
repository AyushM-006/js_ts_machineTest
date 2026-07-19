"use strict";
class Viewer {
    viewerName;
    viewerId;
    email;
    city;
    constructor(viewerName, viewerId, email, city) {
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
