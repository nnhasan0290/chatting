import express from "express";
import {
  loginController,
  signupController,
} from "../controllers/authController.js";

const router = express.Router();

router.route("/auth/signup").post(signupController);
router.route("/auth/login").post(loginController);

export default router;
