import sendOtpEmail from "../utils/sendOtpEmail.js";
import { savedOTPS } from "../utils/sendOtpEmail.js";

export const sendOtpController = (req, res, nex) => {
  sendOtpEmail(req.body.email, res);
};

export const verifyOtpController = (req, res, next) => {
  let otprecived = req.body.otp;
  let email = req.body.email;
  if (savedOTPS[email] == otprecived) {
    res.send("Verfied");
  } else {
    res.status(500).send("Invalid OTP");
  }
};
