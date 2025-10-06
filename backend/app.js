import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { MongoClient, ServerApiVersion } from "mongodb";
import user from "./src/routes/userRoute.js"; // Adjust the path as necessary
import items from "./src/routes/itemRoute.js"; // Adjust the path as necessary
import cartRoute from "./src/routes/cartRoute.js";

// Load environment variables
dotenv.config();

import mongoose from "mongoose";

// Connect Mongoose to MongoDB
mongoose
  .connect(
    process.env.MONGO_URI ||
      "mongodb+srv://admin:admin123@mongo.byfu0cx.mongodb.net/?retryWrites=true&w=majority&appName=Mongo",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("✅ Mongoose connected to MongoDB!"))
  .catch((err) => {
    console.error("❌ Mongoose connection error:", err);
    process.exit(1);
  });

///
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//ROUTES
app.use("/users", user);
app.use("/items", items);

// MongoDB connection
const uri =
  "mongodb+srv://admin:admin123@mongo.byfu0cx.mongodb.net/?retryWrites=true&w=majority&appName=Mongo";

if (!uri) {
  console.error("❌ MongoDB URI is not defined. Please check your .env file.");
  process.exit(1);
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Global database connection
let db;

// Connect to MongoDB
async function connectToMongoDB() {
  try {
    await client.connect();
    db = client.db("MONGO_DB");
    console.log("✅ Successfully connected to MongoDB!");

    // Test the connection
    await client.db("admin").command({ ping: 1 });
    console.log("📡 Database connection verified!");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1);
  }
}

// ...existing code...
app.use("/api/cart", cartRoute);

// Basic routes
app.get("/", (req, res) => {
  res.json({
    message: "MongoDB Express Backend API",
    status: "running",
    timestamp: new Date().toISOString(),
  });
});

// Health check endpoint
app.get("/health", async (req, res) => {
  try {
    await client.db("admin").command({ ping: 1 });
    res.json({
      status: "healthy",
      database: "connected",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    res.status(500).json({
      status: "unhealthy",
      database: "disconnected",
      error: error.message,
      timestamp: new Date().toISOString(),
    });
  }
});

// SELECT * FROM users

// Example CRUD routes for a "users" collection

// ** get route
app.get("/api/users", async (req, res) => {
  try {
    const users = await db
      .collection("users")
      .find({ age: { $gt: 11 } })
      .toArray();
    res.json({
      success: true,
      data: users,
      count: users.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

app.get("/api/items", async (req, res) => {
  try {
    const items = await db.collection("items").find().toArray();
    res.json({
      success: true,
      data: items,
      count: items.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

//** post route
app.post("/api/users", async (req, res) => {
  try {
    const userData = req.body;
    userData.createdAt = new Date();

    const result = await db.collection("users").insertOne(userData);
    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: { id: result.insertedId, ...userData },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

app.post("api/items", async (req, res) => {
  try {
    const itemData = req.body;
    itemData.createdAt = new Date();

    const result = await db.collection("items").insertOne(itemData);
    res.status(201).json({
      success: true,
      meesage: "Item created successfully",
      data: { id: result.insertedId, ...itemData },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

//** getById route
app.get("/api/users/:id", async (req, res) => {
  try {
    const { ObjectId } = await import("mongodb");
    const user = await db
      .collection("users")
      .findOne({ _id: new ObjectId(req.params.id) });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    res.json({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

app.get("/api/items/:id", async (req, res) => {
  try {
    const { ObjectId } = await import("mongodb");
    const user = await db
      .collection("items")
      .findOne({ _id: new ObjectId(req.params.id) });

    if (!items) {
      return res.status(404).json({
        success: false,
        message: "Item not found",
      });
    }
    res.json({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

//* put by route
app.put("/api/users/:id", async (req, res) => {
  try {
    const { ObjectId } = await import("mongodb");
    const updateData = { ...req.body, updatedAt: new Date() };

    const result = await db
      .collection("users")
      .updateOne({ _id: new ObjectId(req.params.id) }, { $set: updateData });

    if (result.matchedCount === 0) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.json({
      success: true,
      message: "User updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

app.put("api/items/:id", async (req, res) => {
  try {
    const { ObjectId } = await import("mongodb");
    const updateData = { ...req.body, updatedAt: new Date() };

    const result = await db
      .collection("items")
      .updateOne({ _id: new ObjectId(req.params.id) }, { $set: updateData });

    if (result.matchedCount === 0) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.json({
      success: true,
      message: "User update successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

//* delete route
app.delete("/api/users/:id", async (req, res) => {
  try {
    const { ObjectId } = await import("mongodb");
    const result = await db
      .collection("users")
      .deleteOne({ _id: new ObjectId(req.params.id) });

    if (result.deletedCount === 0) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

app.delete("/api/items/:id", async (req, res) => {
  try {
    const { ObjectId } = await import("mongodb");
    const result = await db
      .collection("items")
      .deleteOne({ _id: new ObjectId(req.params.id) });

    if (result.deletedCount === 0) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.meesage,
    });
  }
});

// 404 handler
app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error("Unhandled error:", error);
  res.status(500).json({
    success: false,
    message: "Internal server error",
    error:
      process.env.NODE_ENV === "development"
        ? error.message
        : "Something went wrong",
  });
});

// Graceful shutdown
process.on("SIGINT", async () => {
  console.log("\n🔄 Shutting down gracefully...");
  await client.close();
  console.log("📴 MongoDB connection closed.");
  process.exit(0);
});

// Start the server
async function startServer() {
  try {
    await connectToMongoDB();

    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
      console.log(`📊 Environment: ${process.env.NODE_ENV}`);
      console.log(`🗃️ Database: Connected to MongoDB`);
      console.log("\nAvailable endpoints:");
      console.log("  GET  / - API info");
      console.log("  GET  /health - Health check");
      console.log("  GET  /api/users - Get all users");
      console.log("  POST /api/users - Create a user");
      console.log("  GET  /api/users/:id - Get user by ID");
      console.log("  PUT  /api/users/:id - Update user by ID");
      console.log("  DELETE /api/users/:id - Delete user by ID");
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

startServer();

export { connectToMongoDB, db, app }; // Export for testing or other purposes
