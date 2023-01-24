import express from "express";
import { dummyData } from "../controllers/homeController.js";

const router = express.Router();

router.route("/home").get(dummyData);

export default router;
