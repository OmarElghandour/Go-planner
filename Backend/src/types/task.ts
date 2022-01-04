import { Document } from "mongoose";

export interface ITask extends Document {
  name: string;
  description: string;
  start_date: Date;
  end_date : Date;
}
