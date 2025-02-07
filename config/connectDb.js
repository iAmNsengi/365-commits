import mongoose from "mongoose";

export const mongodbConnection = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log("Successfully connected to MongoDB, ", conn.connection.host);
  } catch (error) {
    console.error("Error connecting to MongoDb", error?.message);
  }
};
