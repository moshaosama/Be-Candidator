import express from "express";
import { CreateSkill } from "../../Controller/EditProfile/CreateSkills.js";

const CreateSkillRouter = express.Router();

CreateSkillRouter.route("/").post(CreateSkill);

export default CreateSkillRouter;
