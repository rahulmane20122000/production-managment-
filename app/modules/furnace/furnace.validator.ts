import { body } from "express-validator";
import { validate } from "../../utility/validate";

export const FurnaceValidator = [
  body("furnaceName").isString().notEmpty().withMessage("furnaceName is required"),
  validate,
];
