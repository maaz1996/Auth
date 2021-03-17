const env = process.env;
module.exports={

    "port":"3000",
    "db": { 
    	 "host": env.DB_HOST || 'localhost:3306',
    "user": env.DB_USER || 'freedbtech_shyplite	',
    "password": env.DB_PASSWORD || 'password',
    database: env.DB_NAME || 'freedbtech_language',
},
}
