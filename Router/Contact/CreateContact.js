import express from "express";
import { CreateContact } from "../../Controller/Contact/CreateContact.js";

const CreateContactRouter = express.Router();

CreateContactRouter.post("/", CreateContact);

export default CreateContactRouter;
