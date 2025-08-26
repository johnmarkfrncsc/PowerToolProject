import itemServices from "../../services/itemServices.js";

const getAllItem = async (req, res) => {
  try {
    const { limit } = req.query;
    const result = await itemServices.getAllItem(limit);
    res.status(200).json(result);
  } catch (error) {}
};

const getByItem = async (req, res) => {
  try {
    const item = req.params.item;
    console.log(req.params);

    if (!item) {
      return res.status(404).json({
        success: false,
        message: "Item not found",
      });
    }
    const result = await itemServices.getByItem(item);
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

const createItem = async (req, res) => {
  try {
    const data = req.body;
    console.log(`data`, data);
    console.log(`item`, data.item);

    if (!data) {
      res.status(400).json({
        message: "Data is required",
      });
    }
    const result = await itemServices.createItem(data);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const updateByItem = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      res.status(400).json({
        message: "Data is required",
      });
      return;
    }
    const result = await itemServices.updateByItem(id);

    if (result.matchCount === 0) {
      return res.status(404).json({
        success: false,
        message: "Item not found",
      });
    }

    res.status(200).json({
      result: result,
      success: true,
      message: "Item update successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const deleteByItem = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      res.status(400).json({
        message: "Item not found",
      });
      return;
    }
    const result = await itemServices.deleteByItem(id);

    if (result.deleteCount === 0) {
      res.status(404).json({
        success: false,
        message: "Item not found",
      });
    }
    res.status(200).json({
      success: true,
      mesasge: "Item deleted sucessfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

export default {
  getAllItem,
  getByItem,
  createItem,
  updateByItem,
  deleteByItem,
};
