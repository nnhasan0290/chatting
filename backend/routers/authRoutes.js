import express from "express";
import multer from "multer";
const upload = multer()
import { signupController } from "../controllers/authController.js";

const router = express.Router();


router.route("/auth/signup").post(upload.single('image') ,signupController)

export default router;