import { Router } from "express";
import * as controller from "../controllers/gameController";
import upload from "../utils/multerUpload";

const router: Router = Router();

router.route("/")
    .get(controller.getAll)
    .post(controller.createOne);
router.route("/:id")
    .get(controller.getOne)
    .put(controller.updateOne)
    .delete(controller.deleteOne)
    // .post(upload.single("image"), controller.linkImage);


export default router;