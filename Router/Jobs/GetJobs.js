import express from "express";
import { GetJobs } from "../../Controller/Jobs/GetJobs.js";

const GetJobsRouter = express.Router();

GetJobsRouter.get("/", GetJobs);

export default GetJobsRouter;
