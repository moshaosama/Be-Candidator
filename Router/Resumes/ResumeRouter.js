import express from "express";
import { UploadResume } from "../../Controller/Resumes/UploadResume.js";
import { getResumes } from "../../Controller/Resumes/getResume.js";
const ResumeRouter = express.Router();

ResumeRouter.route("/").post(UploadResume);
ResumeRouter.route("/:candidate_id").get(getResumes);

export default ResumeRouter;
