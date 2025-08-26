import { db } from "../../app.js";

const getAllItem = async (limit, brand, category, price) => {
  try {
    const parsedLimit = parseInt(limit) || 12;
    console.log(parsedLimit, brand, category, price);

    /* Filter */
    const query = {};

    if (brand) query.brand = { $regex: brand, $options: "i" }; //"i" -> toLowerCase
    if (category) query.category = { $regex: category, $options: "i" }; //"i" -> toLowerCase
    if (price) query.price = price;

    console.log(query);

    const items = await db
      .collection("items")
      .find(query)
      .limit(parsedLimit)
      .toArray();
    return {
      success: true,
      data: items,
      count: items.length,
    };
  } catch (error) {
    return {
      message: "Something went wrong",
      data: null,
    };
  }
};

const getByItem = async (item) => {
  try {
    const items = await db
      .collection("items")
      .find({ item: { $eq: item } })
      .toArray();
    console.log(`item`, item);
    return {
      success: true,
      data: items,
      count: items.length,
    };
  } catch (error) {
    return {
      message: "Something went wrong",
      data: null,
    };
  }
};

const createItem = async (itemData) => {
  try {
    itemData.createdAt = new Date();
    const result = await db.collection("items").insertOne(itemData);
    return {
      success: true,
      message: "Item created successfully",
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
};

const updateByItem = async (id, data) => {
  try {
    const { ObjectId } = await import("mongodb");
    const updateData = { ...data, updateData: new Date() };

    const result = await db
      .collection("items")
      .updateOne({ _id: new Object(id) }, { $set: updateData });

    return {
      result: result,
      success: true,
      message: "Items updated successfully",
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
};

const deleteByItem = async (id) => {
  try {
    const { ObjectId } = await import("mongodb");
    const result = await db
      .collection("items")
      .deleteOne({ _id: new ObjectId(id.params.id) });

    return {
      result: result,
      success: true,
      message: "items deleted successfully",
    };
  } catch {
    return {
      success: false,
      error: error.message,
    };
  }
};

export default {
  getAllItem,
  getByItem,
  createItem,
  updateByItem,
  deleteByItem,
};
