import express from "express";
import { getJobByCompanyId } from "../../Controller/Jobs/getJobByCompanyId.js";

const router = express.Router();

router.get("/:company_id", getJobByCompanyId);

export default router;
