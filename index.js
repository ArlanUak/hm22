import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import userRoutes from "./routes/userRoutes.js";
import courseRoutes from "./routes/courseRoutes.js";
import lessonRoutes from "./routes/lessonRoutes.js";


dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/users", userRoutes);
app.use("/courses", courseRoutes);
app.use("/courses", lessonRoutes);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(process.env.PORT, () => console.log(` Server запустилсяДААА тута ${process.env.PORT}`));
  })
  .catch((err) => console.error(err));
