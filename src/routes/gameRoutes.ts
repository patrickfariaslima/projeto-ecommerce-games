import { Router } from "express";
import * as controller from "../controllers/gameController";

const router: Router = Router();

router.route("/")
    .get(controller.getAll)
    .post(controller.createOne);
router.route("/:id")
    .get(controller.getOne)
    .put(controller.updateOne)
    .delete(controller.deleteOne)


export default router;