import { body } from "express-validator";
import { validate } from "../../utility/validate";

export const hsnValidator = [
  body("hsnCode").isString().notEmpty().withMessage("hsn code is required"),
  body("productDescription").isString().notEmpty().withMessage("Product Description is required"),
  body("cgst").isNumeric().notEmpty().withMessage("cgst is required"),
  body("sgst").isNumeric().notEmpty().withMessage("sgst is required"),
  body("igst").isNumeric().notEmpty().withMessage("igst is required"),
  validate,
];
