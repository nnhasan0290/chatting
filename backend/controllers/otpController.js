import sendOtpEmail from "../utils/sendOtpEmail";
import { savedOTPS } from "../utils/sendOtpEmail";

export const sendOtpController = (req, res, nex) => {
  sendOtpEmail(req.body.email);
};

export const verifyOtpContrller = (req, res, next) => {
  let otprecived = req.body.otp;
  let email = req.body.email;
  if (savedOTPS[email] == otprecived) {
    res.send("Verfied");
  } else {
    res.status(500).send("Invalid OTP");
  }
};
