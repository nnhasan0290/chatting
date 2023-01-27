import express from "express";
import {
  loadUser,
  loginController,
  logoutUser,
  signupController,
} from "../controllers/authController.js";

const router = express.Router();

router.route("/auth/signup").post(signupController);
router.route("/auth/login").post(loginController);
router.route("/auth/load").get(loadUser);
router.route("/auth/logout").get(logoutUser);

export default router;
