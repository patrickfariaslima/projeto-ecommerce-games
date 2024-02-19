import { Router } from "express";
import { getAll, getOne, createOne, updateOne, deleteOne } from "../controllers/gameController";

const router = Router();

router.route("/")
    .get(getAll)
    .post(createOne);

router.route("/:id")
    .get(getOne)
    .put(updateOne)
    .delete(deleteOne);

export default router;