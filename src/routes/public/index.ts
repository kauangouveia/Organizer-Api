import { Router } from "express";

const route = Router();
import UserController from "../../controller/users/index"

route.post("/create-user", UserController.create);


export default route;
