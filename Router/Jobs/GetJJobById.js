import express from "express";
import { GetJobById } from "../../Controller/Jobs/GetJobById.js";

const router = express.Router();

router.get("/:jobId", GetJobById);

export default router;
