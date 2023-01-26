import express from "express";
import homeRouter from "./routers/homeRoutes.js";
import otpVerifyRouter from "./routers/otpVerifyRoutes.js";
import authRouter from "./routers/authRoutes.js";
import dotEnv from "dotenv";
import multer from "multer";
import cors from "cors";
import connectDatabase from "./config/db.js";
const app = express();
const upload = multer({ dest: "./uploads" });

dotEnv.config({ path: "./backend/config/.env" });

app.use(cors());
app.use(express.json());

app.use(upload.array());
connectDatabase();

app.use("/api", homeRouter);
app.use("/api", otpVerifyRouter);
app.use("/api", authRouter);

app.listen(process.env.PORT, () => {
  console.log(`app is listening to the port ${process.env.PORT}`);
});
