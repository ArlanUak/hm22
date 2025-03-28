import mongoose from "mongoose";
import LessonSchema from "./Lesson.js";

const CourseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  lessons: [LessonSchema],
});

const Course = mongoose.model("Course", CourseSchema);
export default Course;
