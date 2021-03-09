const express=require("express");
const app= express();
const config= require ("./config")
 app.use("/",(req,res,next)=>{
     res.status(200).send({
         status:"200",
         message: "Hello World"
     })
 }
 );
// app.use("/api/v1", authroutes)
// const authroutes=require("../routes/authRoutes")

//  // 	(req,res,next)=>{
//  //     res.status(200).send({
//  //         status:"200",
//  //         message: "API Req ok"
//  //     })
//  // }
//  // );

app.use
app.listen(config["port"],()=>{
    console.log(`Server started on port :${config["port"]}`)
})