import express from "express";
import { CreateSavedJob } from "../../Controller/SavedJob/CreateSavedJob.js";
import { GetJoinJobs } from "../../Controller/SavedJob/GetـJoinJobs.js";
import { DeleteSavedJob } from "../../Controller/SavedJob/DeleteSavedJob.js";

const SavedJobRouter = express.Router();

SavedJobRouter.route("/").get(GetJoinJobs);
SavedJobRouter.route("/:job_id").post(CreateSavedJob).delete(DeleteSavedJob);

export default SavedJobRouter;
