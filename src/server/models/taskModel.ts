import mongoose, { Schema, Document } from "mongoose";
import { Task } from "../../types";

interface TaskDocument extends Document, Task {
  createdAt: Date;
  updatedAt: Date;
}

const taskSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    preview: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    deadline: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const TaskModel = mongoose.model<TaskDocument>("Task", taskSchema);
export default TaskModel;
