var mysql = require("mysql");
const config = require('../config');
const connection = mysql.createConnection({
		host     : 'localhost',
		user     : 'root',
		password : 'password',
		database : 'testDB'
	});

	connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});


module.exports= connection