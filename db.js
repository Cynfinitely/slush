const Pool = require('pg').Pool;
require('dotenv').config();

const devConfig = {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,};

const proConfig = {
    connectionString : process.env.DATABASE_URL, // heroku addons
    ssl: {
        rejectUnauthorized: false
      },
}

const pool = new Pool(process.env.NODE_ENV === 'production'? proConfig : devConfig);


module.exports = pool;