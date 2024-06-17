import express from "express";
import db from "./db.js";
import orderRoutes from "./routes/orderRoutes.js";

const app = express();

app.use(express.json());
app.use("/orders", orderRoutes);

const startServer = async () => {
  const port = process.env.PORT || 4000;
  try {
    await db.connect();
    app.listen(port, () => {
      console.log("connecting to port 4000");
    });
  } catch (error) {
    console.log("can not connect", error);
  }
};

startServer();
