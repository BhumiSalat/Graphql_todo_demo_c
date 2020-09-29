import mongoose from "mongoose";
import { TodoModel } from "./todo.inerface";

const todoSchema = new mongoose.Schema(
  {
    // userId: mongoose.Types.ObjectId, //("User", userSchema),
    title: String,
    completed: Boolean,
  },
  {
    timestamps: true,
  }
);

const Todo = mongoose.model<TodoModel>("Todo", todoSchema);
export { Todo };
