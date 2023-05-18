import { Router } from "express";
import { createUserController } from "../controllers/user.controller";

let route: Router = Router();

route.post('/createUser', createUserController);

export default route;