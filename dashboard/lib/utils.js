import mongoose from 'mongoose';

let connection = { isConnected: false };

export const connectDB = async () => {
  if (connection.isConnected) return;

  try {
    const db = await mongoose.connect(process.env.MONGO, {
      ssl: true,
    });

    connection.isConnected = db.connections[0].readyState;
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    throw new Error(error.message || "Unknown MongoDB connection error");
  }
};
