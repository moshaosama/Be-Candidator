import express from "express";
import { GetCompanies } from "../../Controller/Company/GetCompanies.js";

const getCompaniesRouter = express.Router();

getCompaniesRouter.route("/").get(GetCompanies);

export default getCompaniesRouter;
