import { body } from "express-validator";
import { validate } from "../../utility/validate";

export const UnitsValidator = [
  body("unit").isString().notEmpty().withMessage("unit is required"),
  body("rate").isNumeric().notEmpty().withMessage("rate is required"),
  validate,
];
