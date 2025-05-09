import mysql from "mysql2";
import dotenv from 'dotenv'

dotenv.config({config: ".env"});

const DB = mysql.createConnection({
    host: process.env.MYSQLHOST || "localhost",
    user: process.env.MYSQLUSER || "root",
    password: process.env.MYSQL_ROOT_PASSWORD || "",
    database: process.env.MYSQL_DATABASE || "candidator",
    port: process.env.MYSQLPORT || 3306
});

export default DB;