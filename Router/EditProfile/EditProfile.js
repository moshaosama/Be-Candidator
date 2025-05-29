import express from "express";
import { EditDetailsCandidates } from "../../Controller/EditProfile/EditDetailCandidate.js";

const EditProfileCandidateRouter = express.Router();

EditProfileCandidateRouter.route("/:candidateId").put(EditDetailsCandidates);

export default EditProfileCandidateRouter;
