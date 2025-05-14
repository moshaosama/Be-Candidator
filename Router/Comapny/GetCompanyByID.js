import express from "express";
import { GetComanyByID } from "../../Controller/Company/GetComanyByID.js";

const GetCompanyByIDRouter = express.Router();

GetCompanyByIDRouter.get("/:companyId", GetComanyByID);

export default GetCompanyByIDRouter;
