import express from "express";
import { GetContacts } from "../../Controller/Contact/GetContacts.js";

const GetContactRouter = express.Router();

GetContactRouter.get("/", GetContacts);

export default GetContactRouter;
