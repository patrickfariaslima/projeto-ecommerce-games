import { Router } from "express";
import * as controller from "../controllers/orderController";

const router: Router = Router();

router.route("/")
    .get(controller.getAllOrders)
    .post(controller.createOrder);

router.route("/:id")
    .get(controller.getOneOrder)
    .put(controller.updateOrder)
    .delete(controller.deleteOrder);

export default router;