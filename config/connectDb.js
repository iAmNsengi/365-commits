import mongoose from "mongoose";

export const mongodbConnection = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(conn.connection.host);
  } catch (error) {
    console.error("Error connecting to MongoDb", error?.message);
  }
};
