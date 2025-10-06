import express from "express";
import cartController from "../controllers/login/cartController.js";

const router = express.Router();

router.post("/add", cartController.addToCart);
router.get("/:userId", cartController.getCart);

export default router;
