import { Router } from "express";

const route = Router();
import UserController from "../../controller/users/index"
import TaskController from "../../controller/task/index"

route.post("/create-user", UserController.create);
route.post("/login", UserController.login);

// task
route.post("/create-task", TaskController.create);
route.get("/list-task", TaskController.findTask);
route.delete("/delete-task", TaskController.deleteTask);


export default route;
