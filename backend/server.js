const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Routes
const authRoutes = require("./routes/authRoutes");
const testRoutes = require("./routes/testRoutes"); 
const taskRoutes = require("./routes/taskRoutes");



dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Connect Database
connectDB();

// Test Root Route
app.get("/", (req, res) => {
  res.send("Server is running...");
});

// Auth Routes
app.use("/api/auth", authRoutes);

// Test Protected Routes
app.use("/api/test", testRoutes); 

app.use("/api/tasks", taskRoutes);


// Server Listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on port ${PORT}`)
);
