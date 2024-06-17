import express from "express";
import Order from "../models/Order.js";

const router = express.Router();

//create a new Order

router.post("/", async (req, res, next) => {
  try {
    const newOrder = await Order.create(req.body);
    res.json(newOrder);
    console.log("new Order is,", newOrder);
  } catch (error) {
    next(error);
  }
});

export default router;

// get all Orders

// Get all Orders
router.get("/", async (req, res) => {
  try {
    const Orders = await Order.find();
    res.status(200).json(Orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// update one order

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updateData = await Order.replaceOne({ _id: id }, req.body);
    res.json(updateData);
  } catch (error) {
    console.log(error);
  }
});

//patch method

router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    //replace the old order
    const updateData = await Order.findByIdAndUpdate({ _id: id }, req.body);
    res.json(updateData);
  } catch (error) {
    console.log(error);
  }
});

// soft delete
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const update = { deletedAt: new Date() };
    const deletedData = await Order.findByIdAndUpdate(id, update);
    res.json(deletedData);
  } catch (error) {
    console.log(error);
  }
});

//get the filter data

router.get("/filter", async (req, res) => {
  try {
    const filter = { deletedAt: null };
    const orders = await Order.find(filter);
    res.json(orders);
  } catch (error) {
    console.log(error);
  }
});
