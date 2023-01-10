"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hsnValidator = void 0;
const express_validator_1 = require("express-validator");
const validate_1 = require("../../utility/validate");
exports.hsnValidator = [
    (0, express_validator_1.body)("hsnCode").isString().notEmpty().withMessage("hsn code is required"),
    (0, express_validator_1.body)("productDescription").isString().notEmpty().withMessage("Product Description is required"),
    (0, express_validator_1.body)("cgst").isNumeric().notEmpty().withMessage("cgst is required"),
    (0, express_validator_1.body)("sgst").isNumeric().notEmpty().withMessage("sgst is required"),
    (0, express_validator_1.body)("igst").isNumeric().notEmpty().withMessage("igst is required"),
    validate_1.validate,
];
//# sourceMappingURL=hsn.validators.js.map