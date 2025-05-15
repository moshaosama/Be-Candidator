import express from "express";
import { CreateJob } from "../../Controller/Jobs/CreateJob.js";

const CreateJobRouter = express.Router();

CreateJobRouter.post("/", CreateJob);

export default CreateJobRouter;
