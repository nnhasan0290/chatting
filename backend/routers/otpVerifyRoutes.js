import express from "express";
import {
  sendOtpController,
  verifyOtpContrller,
} from "../controllers/otpController.js";

const router = express.Router();

router.route("/sendOtp").post(sendOtpController);
router.route("/verifyOtp").post(verifyOtpContrller);

export default router;
