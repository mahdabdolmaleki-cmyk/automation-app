import express from "express";
import mongoose from "mongoose";
import userRouter from "./users/user.controllers";
import taskRouter from "./tasks/task.constrollers";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/user", userRouter);
app.use("/task",taskRouter);


mongoose.connect("mongodb://localhost:27017/automation")
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    })
    .catch((err) => {
        console.error("Failed to connect to MongoDB", err);
    });
