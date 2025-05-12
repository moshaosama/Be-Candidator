import express from "express";
import { CreateCompany } from "../../Controller/Company/CreateCompany.js";

const createCompanyRouter = express.Router();

createCompanyRouter.route("/").post(CreateCompany);

export default createCompanyRouter;
