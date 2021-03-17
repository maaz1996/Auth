const database= require("../utils/db")


module.exports = () => {
	      const signup = ({payload}) => {
    return new Promise(async (resolve, reject) => {
      try {
        const {email,password,name}=payload
        


    	database.query(`select * from auth where email='${email}'`, (err, result) => {
    		if(err){
    			resolve("error")
    		}
    		else if(result.length==0){
    			// console.log(result)
    			// console.log(`insert into auth (email,password,Name) values ('${email}','${password}','${name}')`)
    				database.query(`insert into auth (email,password,Name) values ('${email}','${password}','${name}')`, (err,result)=>{
    					if(!err){

    			 resolve("OK");
    			}else
    			{
    				resolve("error2")
    			}


    		})
    			}
    		
    	else

    	resolve("result")
    	})


      	 // const founduser=database.query(`select * from auth where email='${email}'`)

      	 // console.log(founduser)
         
      } catch (error) {
        reject(error);
      }
    });
  };
  const signin = () => {
    return new Promise(async (resolve, reject) => {
      try {
        resolve("OK");
        
      } catch (error) {
        reject(error);
      }
    });
  };

  return {
     signup,
     signin
  };
};