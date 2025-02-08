import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import compression from "compression";
import mongoSanitize from "express-mongo-sanitize";
import cors from "cors";

import appRoutes from "./routes/index.js";
import { mongodbConnection } from "./config/connectDb.js";
import { errorResponse } from "./utils/responseHandler.js";
import { reqLimit } from "./utils/rateLimits.js";
import corsOptions from "./utils/corsOptions.js";

dotenv.config();
const app = new express();

mongodbConnection();

app.use(express.json());
app.use(helmet());
app.use(compression());
app.use(mongoSanitize()); // data sanitization against NoSQL attacks
app.use(cors(corsOptions));

app.use(reqLimit);

app.use(appRoutes);
app.use(errorResponse);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("App is listenig on port", PORT);
});
