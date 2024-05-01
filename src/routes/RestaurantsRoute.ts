import express from "express";
import { param } from "express-validator";
import RestaurantsController from "../controller/RestaurantsController";

const router = express.Router();

router.get(
  "/:restaurantId",
  param("restaurantId")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("Restaurant id parameter must be a valid string"),
  RestaurantsController.getRestaurant
);
router.get(
  "/search/:city",
  param("city")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("City paramenter must be a valid string"),
  RestaurantsController.seachRestaurants
);

export default router;
