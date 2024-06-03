import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import UserRoute from "./routes/UserRoute";
import { v2 as cloudinary } from "cloudinary";
import RestaurantRouter from "./routes/RestaurantRoute";
import RestaurantsRoute from "./routes/RestaurantsRoute";
import OrderRouter from "./routes/OrderRoute";

const PORT = "7000";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() => {
  console.log("Connect to mongodb!");
});
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
const app = express();
app.use(cors());
app.use("/api/order/checkout/webhook", express.raw({ type: "*/*" }));
app.use(express.json());

app.get("/api/health", (req: Request, res: Response) => {
  try {
    res.status(200).json({
      health: "Health OK",
    });
  } catch (error: any) {
    console.log(error);
    res.send(500).json({
      message: "Something went wrong",
    });
  }
});

app.use("/api/user", UserRoute);
app.use("/api/restaurant", RestaurantRouter);
app.use("/api/restaurants", RestaurantsRoute);
app.use("/api/order", OrderRouter);

app.listen(PORT, () => {
  console.log(`Server start at localhost:${PORT}`);
});
