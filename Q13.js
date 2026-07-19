"use strict";
class Person {
}
class Viewer extends Person {
    getDetails() {
        console.log("Viewer Details");
    }
    getRole() {
        console.log("The Person is Viewer");
    }
}
class Admin extends Person {
    getDetails() {
        console.log("Admin Details");
    }
    getRole() {
        console.log("The Person is Admin");
    }
}

const v1 = new Viewer();
v1.getDetails();
v1.getRole();
const a1 = new Admin();
a1.getDetails();
a1.getRole();
