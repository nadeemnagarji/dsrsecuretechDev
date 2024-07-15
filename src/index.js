import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
import { setupSwagger } from "../swagger.js";

dotenv.config({
  path: "./.env",
});

setupSwagger(app);

connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log("server is running at ", process.env.PORT);
  });
});
