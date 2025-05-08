import express from "express"
import dotenv from "dotenv"
import DB from "./ConnectDB/DB.js"
import createRecruiterRouter from "./Router/Recruiter/createRecruiter.js"
import getRecruiterRouter from "./Router/Recruiter/getRecruiter.js"
import cors from "cors"
dotenv.config({config: "./Config/.env"});

const app = express();
const Port = process.env.PORT || 8000;



//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());


//Endpoints
app.use("/create-recruiter", createRecruiterRouter);
app.use("/get-recruiter", getRecruiterRouter);
/////////////////////////////////////////////


app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
    DB.connect((err) => {
        if(err) {
            console.log("Error connecting to the database", err);
        } else {
            console.log("Connected to the database");
        }
    })
})
