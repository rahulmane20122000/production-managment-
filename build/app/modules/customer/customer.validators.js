"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerValidator = void 0;
const express_validator_1 = require("express-validator");
const validate_1 = require("../../utility/validate");
exports.customerValidator = [
    (0, express_validator_1.body)("customerName").isString().notEmpty().withMessage("customerName is required"),
    (0, express_validator_1.body)("email").isEmail().notEmpty().withMessage("email is required"),
    (0, express_validator_1.body)("shippingAddress").isString().notEmpty().withMessage("shippingAddress is required"),
    (0, express_validator_1.body)("state").isString().notEmpty().withMessage("state is required"),
    validate_1.validate,
];
//# sourceMappingURL=customer.validators.js.map