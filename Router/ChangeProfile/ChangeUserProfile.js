import express from "express";
import { ChanegUserProfile } from "../../Controller/ChangeProfile/ChangeUserProfile.js";

const ChangeUserProfileRouter = express.Router();

ChangeUserProfileRouter.route("/:user_id").put(ChanegUserProfile);

export default ChangeUserProfileRouter;
