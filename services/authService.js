module.exports = () => {

      const signup = () => {
    return new Promise(async (resolve, reject) => {
      try {
        
          resolve("OK");
        
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