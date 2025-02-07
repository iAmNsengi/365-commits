import express from "express";
import dotenv from "dotenv";

import appRoutes from "./routes/index.js";
import { mongodbConnection } from "./config/connectDb.js";

dotenv.config();
const app = new express();

mongodbConnection();

app.use(express.json());

app.use(appRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("App is listenig on port", PORT);
});
