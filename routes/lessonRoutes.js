import express from "express";
import { addLesson, getLessons, getLesson, updateLesson, deleteLesson } from "../controllers/lessonController.js";

const router = express.Router();

router.get("/:courseId/lessons", getLessons);

router.get("/:courseId/lessons/:lessonId", getLesson);

router.post("/:courseId/lessons", addLesson);

router.patch("/:courseId/lessons/:lessonId", updateLesson);

router.delete("/:courseId/lessons/:lessonId", deleteLesson);

export default router;
