import { body } from "express-validator";
import { validate } from "../../utility/validate";

export const StorageValidator = [
  body("building").isString().notEmpty().withMessage("buildingName is required"),
  body("shelf").isString().notEmpty().withMessage("shelf is required"),
  body("row").isString().notEmpty().withMessage("row is required"),
  body("rack").isString().notEmpty().withMessage("rack is required"),
  validate,
];
