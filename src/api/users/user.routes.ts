import express from "express";
import {
  getAllUsers,
  getUserByID,
  loginUser,
  registerUser,
} from "./user.controller";

const router = express.Router();

router.get("/", async (req, res) => {
  await getAllUsers(req, res);
});

router.get("/:id", async (req, res) => {
  await getUserByID(req, res);
});

router.post("/register", async (req, res) => {
  await registerUser(req, res);
});

router.post("/login", async (req, res) => {
  await loginUser(req, res);
});

export { router as userRoutes };
