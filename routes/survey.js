import express from "express";
import { getAllSurveyPosts, createSurveyPost } from "../controllers/survey.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", verifyToken, getAllSurveyPosts);


/* CREATE */
router.post("/", createSurveyPost);

export default router;
