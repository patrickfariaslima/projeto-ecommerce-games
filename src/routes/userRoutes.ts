import { Router } from "express";
import * as controller from "../controllers/userController"
import {authMiddleware}  from "../middlewares/authMiddleware";

const router: Router = Router();

router.get("/", controller.getUsers)

router.post("/login", authMiddleware);

router.post("/create", controller.createUser);

export default router;
