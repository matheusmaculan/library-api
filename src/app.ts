import express from "express";
import db from "./config/dbConnect";
import { routes } from "./routes/index";

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

export const app = express();

app.use(express.json());

routes(app);
