import userServices from "../../services/userServices.js";

const getAllUsers = async (req, res) => {
  try {
    const result = await userServices.getAllUsers();
    res.status(200).json(result);
  } catch (error) {
    // next(error);
  }
};

const getByName = async (req, res) => {
  try {
    const name = req.params.name;
    console.log(req.params);
    if (!name) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    const result = await userServices.getByName(name);
    res.json({
      success: true,
      data: result.data,
      count: result.count,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const createUser = async (req, res) => {
  try {
    const data = req.body;
    console.log(`data`, data);
    console.log(`name`, data.name);
    if (!data) {
      res.status(400).json({ message: "Data is required" });
      return;
    }
    const result = await userServices.createUser(data);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const updateByUser = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    if (!id || !data) {
      res.status(400).json({ message: "ID and data are required" });
      return;
    }
    const result = await userServices.updateByUser(id, data);

    if (result.result.matchedCount === 0) {
      res.status(404).json({
        success: false,
        message: "User not found",
      });
      return;
    }
    res
      .status(200)
      .json({ result: result, message: "User updated successfully" });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const deleteByUser = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      res.status(400).json({ message: "ID is required" });
      return;
    }
    const result = await userServices.deleteByUser(id);

    if (result.result.deletedCount === 0) {
      res.status(404).json({
        success: false,
        message: "User not found",
      });
      return;
    }
    res
      .status(200)
      .json({ result: result, message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

export default {
  getAllUsers,
  getByName,
  createUser,
  updateByUser,
  deleteByUser,
};
