import Course from "../models/Course.js";

export const createCourse = async (req, res) => {
  try {
    const { title, description, author } = req.body;
    const course = await Course.create({ title, description, author, lessons: [] });
    res.status(201).json(course);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getCourses = async (req, res) => {
  const courses = await Course.find().populate("author", "username email");
  res.json(courses);
};

export const getCourse = async (req, res) => {
  const course = await Course.findById(req.params.id).populate("author", "username email");
  res.json(course);
};

export const updateCourse = async (req, res) => {
  const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(course);
};

export const deleteCourse = async (req, res) => {
  await Course.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted successfully" });
};
