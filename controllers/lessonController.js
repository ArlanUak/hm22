import Course from "../models/Course.js";

export const addLesson = async (req, res) => {
  try {
    const { title, content } = req.body;
    const course = await Course.findById(req.params.courseId);
    if (!course) return res.status(404).json({ message: "Course not found" });

    const newLesson = { title, content };
    course.lessons.push(newLesson);
    await course.save();

    res.status(201).json(course);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getLessons = async (req, res) => {
  try {
    const course = await Course.findById(req.params.courseId);
    if (!course) return res.status(404).json({ message: "Course not found" });

    res.json(course.lessons);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }

};
export const getLesson = async (req, res) => {
    try {
      const course = await Course.findById(req.params.courseId);
      if (!course) return res.status(404).json({ message: "Course not found" });
  
      const lesson = course.lessons.id(req.params.lessonId);
      if (!lesson) return res.status(404).json({ message: "Lesson not found" });
  
      res.json(lesson);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  export const updateLesson = async (req, res) => {
    try {
      const course = await Course.findById(req.params.courseId);
      if (!course) return res.status(404).json({ message: "Course not found" });
  
      const lesson = course.lessons.id(req.params.lessonId);
      if (!lesson) return res.status(404).json({ message: "Lesson not found" });
  
      lesson.title = req.body.title || lesson.title;
      lesson.content = req.body.content || lesson.content;
      await course.save();
  
      res.json(lesson);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  export const deleteLesson = async (req, res) => {
    try {
      const course = await Course.findById(req.params.courseId);
      if (!course) return res.status(404).json({ message: "Course not found" });
  
      const lesson = course.lessons.id(req.params.lessonId);
      if (!lesson) return res.status(404).json({ message: "Lesson not found" });
  
      lesson.deleteOne(); 
      await course.save();
  
      res.json({ message: "Lesson deleted successfully" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
};
