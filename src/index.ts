import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

const PORT = "7000";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() => {
  console.log("Connect to mongodb!");
});
const app = express();
app.use(express.json());
app.use(cors());

app.get("/api", async (req: Request, res: Response) => {
  res.json({ message: "hello world" });
});

app.listen(PORT, () => {
  console.log(`Server start at localhost:${PORT}`);
});
