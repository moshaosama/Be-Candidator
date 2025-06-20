import express from "express";
import { ChanegUserProfile } from "../../Controller/ChangeProfile/ChangeUserProfile.js";
import { ChangePassword } from "../../Controller/ChangeProfile/ChangePassword.js";

const ChangeUserProfileRouter = express.Router();
const ChangePasswordRouter = express.Router();

ChangeUserProfileRouter.route("/:user_id").put(ChanegUserProfile);
ChangePasswordRouter.route("/:user_id").put(ChangePassword);

export { ChangeUserProfileRouter, ChangePasswordRouter };
