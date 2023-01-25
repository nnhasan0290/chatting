import express from "express";
import homeRouter from "./routers/homeRoutes.js";
import otpVerifyRouter from "./routers/otpVerifyRoutes.js";
import dotEnv from "dotenv";
import multer from "multer"
const app = express();
const upload = multer();

dotEnv.config({ path: "./backend/config/.env" });

app.use(express.json());
app.use(upload.array());

app.use("/api", homeRouter);
app.use("/api", otpVerifyRouter);

app.listen(process.env.PORT, () => {
  console.log(`app is listening to the port ${process.env.PORT}`);
});
