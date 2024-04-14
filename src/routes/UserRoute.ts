import express from "express";
import UserController from "../controller/UserController";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateUserRequest } from "../middleware/validation";

const router = express.Router();
router.get("/", jwtCheck, jwtParse, UserController.getCurrentUser);
router.post(
  "/",
  jwtCheck,
  validateUserRequest,
  UserController.createCurrentUser
);
router.put(
  "/",
  jwtCheck,
  jwtParse,
  validateUserRequest,
  UserController.updateCurrentUser
);

export default router;
