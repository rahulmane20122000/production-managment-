import { body } from "express-validator";
import { validate } from "../../utility/validate";

export const materialValidator = [
  body("materialName").isString().notEmpty().withMessage("Material-Name is required"),
  validate,
];
