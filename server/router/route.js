import { Router } from "express";
import * as data  from "../controller/controller.js";

const router = Router();

router.post("/submit", data.submitData);
router.get("/data", data.fetchData);

export default router;