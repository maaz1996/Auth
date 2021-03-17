const express=require("express");
const app= express();
const config= require ("./config")
var bodyParser = require('body-parser')
var mysql = require("mysql");
app.use(bodyParser.json())

 app.get("/",(req,res,next)=>{
     res.status(200).send({
         status:"200",
         message: "Hello World Batman,From Joker"
     })
 }
 );
	




app.listen(config["port"],()=>{
    console.log(`Server started on port :${config["port"]}`)
})


const userRoute = require("./routes/authRoute");
app.use("/api/v1/auth", userRoute);
	