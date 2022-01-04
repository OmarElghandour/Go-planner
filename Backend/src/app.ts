import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import taskRoutes from "./routes/task";

const app = express();

const PORT: string | number = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(taskRoutes);



mongoose.connect('mongodb://localhost:27017/daily-planner')
.then( () => {
    console.log('connected')
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
})
.catch((err) => console.log(err));