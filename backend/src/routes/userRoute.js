import { Router } from "express";
import userController from "../controllers/login/userController.js";

const router = Router();

router.get("/", userController.getAllUsers);
router.get("/:name", userController.getByName);
router.post("/", userController.createUser);
router.put("/:id", userController.updateByUser);
router.delete("/:id", userController.deleteByUser);

//router.get("/user", loginController.getUser);

export default router;
