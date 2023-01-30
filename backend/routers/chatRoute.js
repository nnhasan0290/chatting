import express from "express";
import { accessChat, allChat, allUsers, delChat } from "../controllers/chatController.js";
import isAuthenticated from "../middleWares/authCheck.js";

const router = express.Router();

router.route("/chat/users").get(isAuthenticated,allUsers);
router.route("/chat/access").post(isAuthenticated,accessChat)
router.route("/chat/all").get(isAuthenticated,allChat)
router.route("/chat/del").delete(isAuthenticated,delChat)

export default router;