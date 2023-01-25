import express from "express";
import { sendOtpController } from "../controllers/otpController.js";

const router = express.Router();

router.route("/sendOtp").post(sendOtpController);

export default router;
