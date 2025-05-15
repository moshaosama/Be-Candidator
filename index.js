import express from "express";
import dotenv from "dotenv";
import DB from "./ConnectDB/DB.js";
import createRecruiterRouter from "./Router/Recruiter/createRecruiter.js";
import getRecruiterRouter from "./Router/Recruiter/getRecruiter.js";
import cors from "cors";
import {
  deleteAllRecruiterRouter,
  deleteRecruiterByIdRouter,
} from "./Router/Recruiter/deleteRecruiter.js";
import createCompanyRouter from "./Router/Comapny/CreateCompany.js";
import getCompaniesRouter from "./Router/Comapny/GetCompanies.js";
import GetCompanyByIDRouter from "./Router/Comapny/GetCompanyByID.js";
import CreateContactRouter from "./Router/Contact/CreateContact.js";
import GetContactRouter from "./Router/Contact/GetContact.js";
import CreateJobRouter from "./Router/Jobs/CreateJob.js";
import GetJobsRouter from "./Router/Jobs/GetJobs.js";
dotenv.config({ config: ".env" });

const app = express();
const Port = process.env.PORT;

setInterval(() => {
  DB.query("SELECT 1", (err) => {
    if (err) {
      console.error("MySQL Keep-Alive Failed:", err.message);
    } else {
      console.log("MySQL Keep-Alive Ping sent");
    }
  });
}, 5 * 60 * 1000);

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//Endpoints
app.use("/create-recruiter", createRecruiterRouter);
app.use("/get-recruiter", getRecruiterRouter);
app.use("/delete-all-recruiter", deleteAllRecruiterRouter);
app.use("/delete-recruiter-by-id", deleteRecruiterByIdRouter);
app.use("/create-company", createCompanyRouter);
app.use("/get-companies", getCompaniesRouter);
app.use("/get-company-by-id", GetCompanyByIDRouter);
app.use("/create-contact", CreateContactRouter);
app.use("/get-contacts", GetContactRouter);
app.use("/create-job", CreateJobRouter);
app.use("/get-jobs", GetJobsRouter);
/////////////////////////////////////////////

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
  DB.connect((err) => {
    if (err) {
      console.log("Error connecting to the database", err);
    } else {
      console.log("Connected to the database");
    }
  });
});
