import express from "express";
import { CreateCandidateinStage } from "../../Controller/Stages/CreateCandidateinStage.js";

const CreateCandidateinStageRouter = express.Router();

CreateCandidateinStageRouter.post("/", CreateCandidateinStage);

export default CreateCandidateinStageRouter;
