import express from "express";
import {
  sendOtpController,
  verifyOtpController,
} from "../controllers/otpController.js";

const router = express.Router();

router.route("/sendOtp").post(sendOtpController);
router.route("/verifyOtp").post(verifyOtpController);

export default router;
