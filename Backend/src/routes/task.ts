import { Router } from "express";
import {
  getTasks,
  addTask,
  updateTask,
  deleteTask,
  retrieveTask,
} from "../controllers/tasks";

const taskRoutes: Router = Router();

taskRoutes.get("/task", getTasks);
taskRoutes.post("/task", addTask);
taskRoutes.put("/task/:id", updateTask);
taskRoutes.delete("/task/:id", deleteTask);
taskRoutes.get("/task/:id", retrieveTask);

export default taskRoutes;
