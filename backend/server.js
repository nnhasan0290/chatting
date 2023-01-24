import express from "express";
import homeRouter from "./routers/homeRoutes.js";
import dotEnv from "dotenv";

const app = express();
dotEnv.config({ path: "./backend/config/.env" });

app.use("/api", homeRouter);

app.listen(process.env.PORT, () => {
  console.log(`app is listening to the port ${process.env.PORT}`);
});
