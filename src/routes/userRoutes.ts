import { Router } from "express";
import * as controller from "../controllers/userController"

const router: Router = Router();

router.get("/", controller.getUsers)

router.post("/login", controller.loginUser);

router.post("/create", controller.createUser);

export default router;
