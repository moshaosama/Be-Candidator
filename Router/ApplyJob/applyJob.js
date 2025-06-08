import express from "express";
import { ApplyJob } from "../../Controller/ApplyJob/applyJob.js";

const ApplyJobRouter = express.Router();

ApplyJobRouter.route("/").post(ApplyJob);

export default ApplyJobRouter;
