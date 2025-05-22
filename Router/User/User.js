import express from "express";
import { SignUp } from "../../Controller/User/SignUp.js";
import { Login } from "../../Controller/User/Login.js";

const SignUpRouter = express.Router();
const LoginRouter = express.Router();

SignUpRouter.route("/").post(SignUp);
LoginRouter.route("/").post(Login);

export { SignUpRouter, LoginRouter };
