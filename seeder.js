import Order from "./models/Order.js";
import db from "./db.js";

await db.connect();
await Order.deleteMany({}); //clear the existing data

// Define your mock Orders
const mockOrders = [
  { name: "Apple", price: 100, description: "This is Apple" },
  { name: "Orange", price: 200, description: "This is Orange" },
  { name: "Banana", price: 300, description: "This is Banana" },
  { name: "Pear", price: 400, description: "This is Pear" },
];

// Insert the mock Orders into the database
await Order.insertMany(mockOrders);
await db.close();
