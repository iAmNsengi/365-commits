import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import compression from "compression";
import mongoSanitize from "express-mongo-sanitize";
import cors from "cors";
import cluster from "cluster";
import os from "os";
import http from "http";
import { Server } from "socket.io";

import appRoutes from "./routes/index.js";
import { mongodbConnection } from "./config/connectDb.js";
import { errorResponse } from "./utils/responseHandler.js";
import { reqLimit } from "./utils/rateLimits.js";
import corsOptions from "./utils/corsOptions.js";

dotenv.config();

if (cluster.isPrimary) {
  const numCPUs = os.cpus().length;
  console.log(`Master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
    cluster.fork(); // Restart the worker
  });
} else {
  // Workers can share any TCP connection
  // In this case, it is an HTTP server
  const app = express();

  const server = http.createServer(app);
  const io = new Server(server);
  const onlineUsers = {};

  io.on("connection", (socket) => {
    console.log(`A new user got connected`);

    socket.on("userOnline", (userId) => {
      onlineUsers[userId] = socket.id;
      console.log(`User ${userId} is online`);
    });

    socket.on("disconnect", () => {
      for (const [userId, socketId] of Object.entries(onlineUsers)) {
        if (socketId === socket.id) {
          delete onlineUsers[userId];
          console.log(`User ${userId} went offline`);
          break;
        }
      }
    });
  });

  mongodbConnection();

  app.use(express.json());
  app.use(helmet());
  app.use(compression());
  app.use(mongoSanitize()); // data sanitization against NoSQL attacks
  app.use(cors(corsOptions));

  app.use(reqLimit);

  app.use(appRoutes);
  app.use(errorResponse);

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Worker ${process.pid} started`);
  });
}
