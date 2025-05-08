import express from 'express';
import {getRecruiters} from '../../Controller/Recruiter/getRecruiters.js';

const getRecruiterRouter = express.Router();

getRecruiterRouter.route("/").get(getRecruiters);

export default getRecruiterRouter;
