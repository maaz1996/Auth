const express=require("express");
const app= express();
const config= require ("./")
// app.use("/api/v1");

app.listen(config["port"],()=>{
    console.log(`Server started on port :${config["port"]}`)
})