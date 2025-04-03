import express from "express";
import { body } from "express-validator";
import { validate } from "../middleware/validate.js";
import {
  createCourse,
  getCourses,
  getCourse,
  updateCourse,
  deleteCourse,
} from "../controllers/courseController.js";

const router = express.Router();

const courseValidationRules = [
  body("title").notEmpty().withMessage("Название курса обязательно"),
  body("description")
    .optional()
    .isLength({ min: 10 })
    .withMessage("Описание должно быть минимум 10 символов"),
  body("author").notEmpty().withMessage("Автор обязателен"),
];

router.post("/", validate(courseValidationRules), createCourse);
router.get("/", getCourses);
router.get("/:id", getCourse);
router.patch("/:id", validate(courseValidationRules), updateCourse);
router.delete("/:id", deleteCourse);

export default router;
