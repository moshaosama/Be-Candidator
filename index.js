import express from "express";
import dotenv from "dotenv";
import DB from "./ConnectDB/DB.js";
import createRecruiterRouter from "./Router/Recruiter/createRecruiter.js";
import getRecruiterRouter from "./Router/Recruiter/getRecruiter.js";
import cors from "cors";
import {
  deleteAllRecruiterRouter,
  deleteRecruiterByIdRouter,
} from "./Router/Recruiter/deleteRecruiter.js";
import createCompanyRouter from "./Router/Comapny/CreateCompany.js";
import getCompaniesRouter from "./Router/Comapny/GetCompanies.js";
import GetCompanyByIDRouter from "./Router/Comapny/GetCompanyByID.js";
import CreateContactRouter from "./Router/Contact/CreateContact.js";
import GetContactRouter from "./Router/Contact/GetContact.js";
import CreateJobRouter from "./Router/Jobs/CreateJob.js";
import GetJobsRouter from "./Router/Jobs/GetJobs.js";
import CandidateRouter from "./Router/Candidate/CandidateRouter.js";
import GetJobByIdRouter from "./Router/Jobs/GetJJobById.js";
import StagesRouter from "./Router/Stages/CreateStage.js";
import CreateCandidateinStageRouter from "./Router/Stages/CreateCandidateinStage.js";
import { LoginRouter, SignUpRouter } from "./Router/User/User.js";
import SavedJobRouter from "./Router/SavedJobs/SavedJobsRouter.js";
import EditProfileCandidateRouter from "./Router/EditProfile/EditProfile.js";
import CreateSkillRouter from "./Router/EditProfile/CreateSkill.js";
import GetSkillByIdRouter from "./Router/EditProfile/GetSkillsByid.js";
import ApplyJobRouter from "./Router/ApplyJob/applyJob.js";
import getApplyJobRouter from "./Router/ApplyJob/getApplyJob.js";
import "./Middleware/ErrorHandling.js";
import ResumeRouter from "./Router/Resumes/ResumeRouter.js";
dotenv.config({ config: ".env" });

const app = express();
const Port = process.env.PORT;

// setInterval(() => {
//   DB.query("SELECT 1", (err) => {
//     if (err) {
//       console.error("MySQL Keep-Alive Failed:", err.message);
//     } else {
//       console.log("MySQL Keep-Alive Ping sent");
//     }
//   });
// }, 5 * 60 * 1000);

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//Endpoints
app.use("/create-recruiter", createRecruiterRouter);
app.use("/get-recruiter", getRecruiterRouter);
app.use("/delete-all-recruiter", deleteAllRecruiterRouter);
app.use("/delete-recruiter-by-id", deleteRecruiterByIdRouter);
app.use("/create-company", createCompanyRouter);
app.use("/get-companies", getCompaniesRouter);
app.use("/get-company-by-id", GetCompanyByIDRouter);
app.use("/create-contact", CreateContactRouter);
app.use("/get-contacts", GetContactRouter);
app.use("/create-job", CreateJobRouter);
app.use("/get-jobs", GetJobsRouter);
app.use("/get-job-by-id", GetJobByIdRouter);
app.use("/create-candidate", CandidateRouter);
app.use("/get-candidates", CandidateRouter);
app.use("/create-stage", StagesRouter);
app.use("/get-stages", StagesRouter);
app.use("/create-candidate-in-stage", CreateCandidateinStageRouter);
app.use("/get-candidate-by-stage", CandidateRouter);
app.use("/get-candidate-by-id", CandidateRouter);
app.use("/create-saved-job", SavedJobRouter);
app.use("/get-saved-jobs", SavedJobRouter);
app.use("/delete-saved-jobs", SavedJobRouter);
app.use("/sign-up", SignUpRouter);
app.use("/login", LoginRouter);
app.use("/edit-candidate-profile", EditProfileCandidateRouter);
app.use("/create-skill", CreateSkillRouter);
app.use("/get-skills", GetSkillByIdRouter);
app.use("/apply-job", ApplyJobRouter);
app.use("/get-apply-job", getApplyJobRouter);
app.use("/upload-resume", ResumeRouter);
app.use("/get-resume", ResumeRouter);
/////////////////////////////////////////////

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
  DB.connect((err) => {
    if (err) {
      console.log("Error connecting to the database", err);
    } else {
      console.log("Connected to the database");
    }
  });
});
