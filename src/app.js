import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(urlencoded({ extended: true, limit: "16kb" }));

app.get("/", (req, res) => {
  res.send("Hello world");
});
export { app };
