import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import routes from "./routes/index";

dotenv.config({ path: ".env" });

const app = express();

// Configure CORS middleware
app.use(
  cors({
    origin: "http://localhost:3000", // Change this address if necessary
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
    allowedHeaders: ["Content-Type"], // Allowed HTTP headers
  })
);

// Middleware
app.use(express.json()); // Body parser middleware

// Routers
app.use("/api", routes);

// MongoDB Connection
const MONGO_URI = process.env.MONGODB_URI;
if (!MONGO_URI) {
  console.error("MongoDB URI is not defined in .env file");
  process.exit(1); // Exit process with failure
}
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
