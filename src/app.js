import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import AuthRouter from "./routes/auth.routes.js";
const app = express();

app.use(urlencoded({ extended: true, limit: "16kb" }));

app.use("/api/v1/auth", AuthRouter);

app.get("/test", (req, res) => {
  res.send("Hello world");
});
export { app };
