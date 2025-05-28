import express from "express";
import { CreateSavedJob } from "../../Controller/SavedJob/CreateSavedJob.js";
import { GetJoinJobs } from "../../Controller/SavedJob/GetـJoinJobs.js";

const SavedJobRouter = express.Router();

SavedJobRouter.route("/").get(GetJoinJobs);
SavedJobRouter.route("/:jobId").post(CreateSavedJob);

export default SavedJobRouter;
