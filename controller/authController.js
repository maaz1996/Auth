
const userAuthSerivce = require("../services/authService.js")();
module.exports = {

  signup: async (req, res,next) => {
  	const response = await userAuthSerivce.signup();
  	if (response == "OK") {
        res.status(200).send({
          status: "200",
          result: "Bahut Badhiya, Signup hoga tumhare"
        });
      } else {
        res.status(200).json({
          status: 200,
          result: "Error"
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
          status: 200,
          result: "Error"
        });
      }
}
}