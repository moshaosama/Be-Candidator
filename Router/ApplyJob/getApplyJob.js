import express from "express";

import {
  getAllApplyJob,
  getApplyJob,
} from "../../Controller/ApplyJob/getApplyJob.js";

const getApplyJobRouter = express.Router();

getApplyJobRouter.route("/:candidator_id").get(getApplyJob);
getApplyJobRouter.route("/").get(getAllApplyJob);

export default getApplyJobRouter;
