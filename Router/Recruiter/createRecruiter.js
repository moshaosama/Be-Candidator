import express from "express";
import {createRecruiter} from "../../Controller/Recruiter/createRecruiter.js"

const createRecruiterRouter = express.Router();


createRecruiterRouter.route("/").post(createRecruiter);



export default createRecruiterRouter;