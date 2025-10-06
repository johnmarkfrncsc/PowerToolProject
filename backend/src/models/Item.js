import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
  name: String,
  brand: String,
  category: String,
  price: Number,
  image: String,
  description: String,
  ItemCode: String,
});

const Item = mongoose.model("Item", ItemSchema);
export default Item;
