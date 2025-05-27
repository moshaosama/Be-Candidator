import express from "express";
import { createCandidate } from "../../Controller/Candidate/CreateCandidate.js";
import { getCandidates } from "../../Controller/Candidate/GetCandidates.js";
import { GetCandidateByStage } from "../../Controller/Candidate/GetCandidateByStage.js";
import { getCandidateById } from "../../Controller/Candidate/getCandidateByid.js";
const CandidateRouter = express.Router();

CandidateRouter.route("/").post(createCandidate).get(getCandidates);
CandidateRouter.route("/:candidateId").get(getCandidateById);
CandidateRouter.route("/:jobId/:stageTitle").get(GetCandidateByStage);

export default CandidateRouter;
