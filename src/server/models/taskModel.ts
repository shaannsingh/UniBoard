import mongoose, { Schema, Document } from "mongoose";
import { Task } from "../../types";

export interface TaskDocument extends Document, Omit<Task, "id"> {
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

export const TaskModel = mongoose.model<TaskDocument>("Task", taskSchema);
