import { body } from "express-validator";
import { validate } from "../../utility/validate";

export const customerValidator = [
  body("customerName").isString().notEmpty().withMessage("customerName is required"),
  body("email").isEmail().notEmpty().withMessage("email is required"),
  body("shippingAddress").isString().notEmpty().withMessage("shippingAddress is required"),
  body("state").isString().notEmpty().withMessage("state is required"),
  validate,
];
