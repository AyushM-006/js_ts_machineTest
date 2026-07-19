abstract class Person{
    abstract getDetails():void
    abstract getRole():void
}

class Viewer extends Person{
    
    getDetails(): void {
        console.log("Viewer Details");
        
    }
    getRole(): void {
        console.log("The Person is Viewer");
        
    }
    
}
class Admin extends Person {
    getDetails(): void {
        console.log("Admin Details");
        
    }
    getRole(): void {
        console.log("The Person is Admin");
        
    }

}

const v1 = new Viewer()
v1.getDetails()
v1.getRole()

const a1 = new Admin()
a1.getDetails()
a1.getRole()