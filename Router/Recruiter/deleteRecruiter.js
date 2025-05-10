import express from "express";
import {
  deleteRecruiterById,
  deleteAllRecruiter,
} from "../../Controller/Recruiter/DeleteRecruiter.js";

const deleteAllRecruiterRouter = express.Router();
const deleteRecruiterByIdRouter = express.Router();

deleteAllRecruiterRouter.route("/").delete(deleteAllRecruiter);
deleteRecruiterByIdRouter.route("/:id").delete(deleteRecruiterById);

export { deleteAllRecruiterRouter, deleteRecruiterByIdRouter };
