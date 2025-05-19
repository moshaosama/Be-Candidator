import express from "express";
import { createStage } from "../../Controller/Stages/CreateStages.js";
import { GetStages } from "../../Controller/Stages/GetStages.js";
const StagesRouter = express.Router();

StagesRouter.route("/:jopID").post(createStage).get(GetStages);

export default StagesRouter;
