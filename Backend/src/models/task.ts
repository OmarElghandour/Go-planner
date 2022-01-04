import { ITask } from "../types/task";
import { model, Schema } from "mongoose";

const taskSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    start_date: {
      type: Date,
      required: true,
    },
    end_date: {
      type: Date,
      required: true,
    },
    
  },
  { timestamps: true }
);

export default model<ITask>("Task", taskSchema);
