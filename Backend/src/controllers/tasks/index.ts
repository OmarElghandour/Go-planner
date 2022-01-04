import { Response, Request } from "express";
import { ITask } from "../../types/task";
import Task from "../../models/task";

const getTasks = async (req: Request, res: Response): Promise<void> => {
  try {
    const tasks: ITask[] = await Task.find();
    res.status(200).json({ tasks });
  } catch (error) {
    throw error;
  }
};

const retrieveTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
    } = req;
    const task: ITask | null = await Task.findById({ _id: id });

    res.status(task ? 200 : 404).json({ task });
  } catch (error) {
    throw error;
  }
};

const addTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<ITask, "name" | "description" | "start_date" | "end_date"  >;
    const task: ITask = new Task({
      name: body.name,
      description: body.description,
      start_date: body.start_date,
      end_date : body.end_date
    });

    const newTask: ITask = await task.save();

    res.status(201).json(newTask);
  } catch (error) {
    throw error;
  }
};

const updateTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req;

    const updateTask: ITask | null = await Task.findByIdAndUpdate(
      { _id: id },
      body
    );

    res.status(updateTask ? 200 : 404).json({
      task: updateTask,
    });
  } catch (error) {
    throw error;
  }
};

const deleteTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedTask: ITask | null = await Task.findByIdAndRemove(
      req.params.id
    );
    res.status(204).json({
      todo: deletedTask,
    });
  } catch (error) {
    throw error;
  }
};
export { getTasks, addTask, updateTask, deleteTask, retrieveTask };
