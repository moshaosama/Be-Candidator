import express from "express";

import { getApplyJob } from "../../Controller/ApplyJob/getApplyJob.js";

const getApplyJobRouter = express.Router();

getApplyJobRouter.route("/:candidator_id").get(getApplyJob);

export default getApplyJobRouter;
