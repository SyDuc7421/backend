import express from "express";
import multer from "multer";
import RestaurantController from "../controller/RestaurantController";
import { validateRestaurantRequest } from "../middleware/validation";
import { jwtCheck, jwtParse } from "../middleware/auth";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5mb
  },
});
// /api/restaurant
router.post(
  "/",
  jwtCheck,
  jwtParse,
  upload.single("imageFile"),
  validateRestaurantRequest,
  RestaurantController.createRestaurant
);

router.get("/", jwtCheck, jwtParse, RestaurantController.getRestaurant);
export default router;
