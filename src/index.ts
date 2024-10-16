import express from "express";
import { userRoutes } from "./api/users/user.routes";
import dotenv from "dotenv";

const app = express();

app.use(express.json());

dotenv.config();

const port = process.env.PORT || 7554;

console.log(process.env.PORT, process.env.SUPABASE_URL);

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Server is healthy" });
});

app.use("/api/v1/u", userRoutes);

app.listen(port, () => {
  return console.log(`Listening on localhost:${port}`);
});
