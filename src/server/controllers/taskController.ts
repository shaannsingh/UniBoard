import { TaskModel, TaskDocument } from "../models/taskModel";
import { Request, Response } from "express";

const getTasks = (req: Request, res: Response) => {
  TaskModel.find() //Find method from MongoDB
    .sort({ createdAt: 1 }) //Sort by deadline
    .then((result: TaskDocument[]) => {
      //TaskDocument[] returns array of tasks from MongoDB collection
      res.status(200).json(result); //Successful status code, returns json of data back to frontend (Tasks)
    })
    .catch((err: Error) => {
      res.status(500).json({ message: "Error fetching tasks." });
    });
};

const createTask = (req: Request, res: Response) => {
  const task = new TaskModel(req.body); // Gives us a fresh request body to pass front end data into

  task
    .save() // Save request data to MongoDB
    .then((result: TaskDocument) => {
      res.status(201).json(result); // Send data back to frontend
    })
    .catch((err: Error) => {
      res.status(400).json({ message: "Error creating task." });
    });
};

const updateTask = (req: Request, res: Response) => {
  TaskModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  }) // Find by :id from /tasks/:id, give fresh body to update document and return new document from MongoDB
    .then((result: TaskDocument | null) => {
      if (!result) {
        return res.status(404).json({ message: "Task not found." });
      }
      res.json(result); // Update UI
    })
    .catch((err: Error) => {
      return res.status(400).json({ message: "Error updating task." });
    });
};

const deleteTask = (req: Request, res: Response) => {
  TaskModel.findByIdAndDelete(req.params.id)
    .then((result: TaskDocument | null) => {
      if (!result) {
        return res.status(404).json({ message: "Task not found." });
      }
      res.json({ message: "Task deleted successfully." });
    })
    .catch((err: Error) => {
      res.status(500).json({ message: "Error deleting task" });
    });
};

export { getTasks, createTask, updateTask, deleteTask };
