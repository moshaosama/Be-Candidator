import express from "express";
import { createCandidate } from "../../Controller/Candidate/CreateCandidate.js";
import { getCandidates } from "../../Controller/Candidate/GetCandidates.js";

const CandidateRouter = express.Router();

CandidateRouter.route("/").post(createCandidate).get(getCandidates);

export default CandidateRouter;
