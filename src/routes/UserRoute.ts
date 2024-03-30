import express from "express";
import UserController from "../controller/UserController";
import jwtUserCheck from "../middleware/auth";

const router = express.Router();

router.post("/", jwtUserCheck, UserController.createCurrentUser);

export default router;
