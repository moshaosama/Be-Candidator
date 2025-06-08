import express from "express";
import { GetSkillById } from "../../Controller/EditProfile/GetSkillsByid.js";

const GetSkillByIdRouter = express.Router();

GetSkillByIdRouter.route("/:candidator_id").get(GetSkillById);

export default GetSkillByIdRouter;
