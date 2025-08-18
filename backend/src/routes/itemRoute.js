import { Router } from "express";
import itemController from "../controllers/login/itemController.js";

const router = Router();

router.get("/", itemController.getAllItem);
router.get("/:item", itemController.getByItem);
router.post("/", itemController.createItem);
router.put("/:id", itemController.updateByItem);
router.delete("/:id", itemController.deleteByItem);

//router.get("/user", loginController.getUser);

export default router;
