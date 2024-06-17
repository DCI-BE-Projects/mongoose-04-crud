import mongoose, { model } from "mongoose";

const { Schema } = mongoose;

const orderSchema = new Schema({
  name: String,
  price: Number,
  description: String,
  deletedAt: {
    type: Date,
    default: null,
  },
});

const Order = model("Order", orderSchema);

export default Order;
