
const userAuthSerivce = require("../services/authService.js")();
module.exports = {

  signup: async (req, res,next) => {
  	  	const payload=req.body	
  	const response = await userAuthSerivce.signup({payload});
  	// console.log(response)
  	if (response == "error") {
        res.status(200).send({
          status: "200",
          result: "Error while fetcing"
        });
      } 
if (response == "OK") {
        res.status(200).send({
          status: "200",
          result: "User Created"
        });
      } 
      if (response == "error2") {
        res.status(200).send({
          status: "200",
          result: "Error while creating user"
        });
      } 
      if(response=="result"){
        res.status(200).json({
          status: 400,
          result: "User Exists"
        });
      }
    
},
signin: async (req, res,next) => {
  	const response = await userAuthSerivce.signin();
  	if (response == "OK") {
        res.status(200).send({
          status: "200",
          result: "Bahut Badhiya, Signin hoga tumhare"
        });
      } else {
        res.status(200).json({
          status: 400,
          result: "Error"
        });
      }
}
}