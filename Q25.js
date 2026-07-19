const mysql = require('mysql');

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"seller"

});

function connectDB(){
    db.connect((err)=>{
        if (err) {
            console.log(err);
            
        } else {
            console.log("Connected...");
            
        }
    })
}
connectDB();