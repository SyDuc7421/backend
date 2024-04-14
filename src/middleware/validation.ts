import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

const handleValidationErrors = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

export const validateUserRequest = [
  body("name").isString().notEmpty().withMessage("Name must be a string"),
  body("address").isString().notEmpty().withMessage("Address must be a string"),
  body("city").isString().notEmpty().withMessage("City must be a string"),
  body("country").isString().notEmpty().withMessage("Country must be a string"),

  handleValidationErrors,
];

export const validateRestaurantRequest = [
  body("restaurantName")
    .isString()
    .notEmpty()
    .withMessage("Restaurant name must be a tring"),

  body("city").isString().notEmpty().withMessage("City name must be a tring"),

  body("country")
    .isString()
    .notEmpty()
    .withMessage("Country name must be a tring"),

  body("deliveryPrice")
    .isFloat({ min: 0 })
    .withMessage("Delivery price must be a positive number"),

  body("estimatedDeliveryTime")
    .isFloat({ min: 0 })
    .withMessage("Estimated dilivery price must be a positive number"),

  body("cuisines")
    .isArray()
    .withMessage("Cuisines must be an array")
    .not()
    .isEmpty()
    .withMessage("Cuisines array can not be empty"),

  body("menuItems").isArray().withMessage("Menu item must be an array"),

  body("menuItems.*.name")
    .isString()
    .isEmpty()
    .withMessage("Menu item name must be a string"),
  body("menuItems.*.price")
    .isFloat({ min: 0 })
    .withMessage("Menu item name must be a positive number"),

  handleValidationErrors,
];
