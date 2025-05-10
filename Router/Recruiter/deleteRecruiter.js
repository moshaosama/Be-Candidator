import express from "express";
import {
  deleteAllRecruiter,
  deleteRecruiterById,
} from "../../Controller/Recruiter/deleteRecruiter.js";

const deleteAllRecruiterRouter = express.Router();
const deleteRecruiterByIdRouter = express.Router();

deleteAllRecruiterRouter.route("/").delete(deleteAllRecruiter);
deleteRecruiterByIdRouter.route("/:id").delete(deleteRecruiterById);

export { deleteAllRecruiterRouter, deleteRecruiterByIdRouter };
