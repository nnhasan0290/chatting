import express from "express";
import {
  loadUser,
  loginController,
  signupController,
} from "../controllers/authController.js";

const router = express.Router();

router.route("/auth/signup").post(signupController);
router.route("/auth/login").post(loginController);
router.route("/auth/load").get(loadUser);

export default router;
