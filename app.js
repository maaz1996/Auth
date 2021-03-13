const express=require("express");
const app= express();
const config= require ("./config")
 app.get("/",(req,res,next)=>{
     res.status(200).send({
         status:"200",
         message: "Hello World, Basics"
     })
 }
 );

const userRoute = require("./routes/authRoute");
app.use("/api/v1/auth", userRoute);

app.use
app.listen(config["port"],()=>{
    console.log(`Server started on port :${config["port"]}`)
})
	