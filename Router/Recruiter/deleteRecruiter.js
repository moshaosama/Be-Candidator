import express from "express";
import {
  deleteRecruiterById,
  deleteAllRecruiter,
} from "../../Controller/Recruiter/DeleteRecruiter.js";

export const deleteAllRecruiterRouter = express.Router();
export const deleteRecruiterByIdRouter = express.Router();

deleteAllRecruiterRouter.route("/").delete(deleteAllRecruiter);
deleteRecruiterByIdRouter.route("/:id").delete(deleteRecruiterById);
