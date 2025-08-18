import { db } from "../../app.js"; // Adjust the import path as necessary

const getAllUsers = async () => {
  try {
    const users = await db.collection("users").find().toArray();
    return {
      success: true,
      data: users,
      count: users.length,
    };
  } catch (error) {
    return {
      message: "something went wrong",
      data: null,
    };
  }
};

const getByName = async (name) => {
  try {
    const users = await db
      .collection("users")
      .find({ name: { $eq: name } })
      .toArray();
    console.log(`name`, name);
    return {
      success: true,
      data: users,
      count: users.length,
    };
  } catch (error) {
    return {
      message: "something went wrong",
      data: null,
    };
  }
};

const createUser = async (userData) => {
  try {
    userData.createdAt = new Date();

    const result = await db.collection("users").insertOne(userData);
    return {
      success: true,
      message: "User created successfully",
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
};

const updateByUser = async (id, data) => {
  try {
    const { ObjectId } = await import("mongodb");
    const updateData = { ...data, updatedAt: new Date() };

    const result = await db
      .collection("users")
      .updateOne({ _id: new ObjectId(id) }, { $set: updateData });
    return {
      result: result,
      success: true,
      message: "User updated successfully",
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
};

const deleteByUser = async (id) => {
  try {
    const { ObjectId } = await import("mongodb");

    const result = await db
      .collection("users")
      .deleteOne({ _id: new ObjectId(id) });
    return {
      result: result,
      success: true,
      message: "User deleted successfully",
    };
  } catch (error) {
    return {
      sucesss: false,
      error: error.message,
    };
  }
};

export default {
  getAllUsers,
  getByName,
  createUser,
  updateByUser,
  deleteByUser,
};
