"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitsValidator = void 0;
const express_validator_1 = require("express-validator");
const validate_1 = require("../../utility/validate");
exports.UnitsValidator = [
    (0, express_validator_1.body)("unit").isString().notEmpty().withMessage("unit is required"),
    (0, express_validator_1.body)("rate").isNumeric().notEmpty().withMessage("rate is required"),
    validate_1.validate,
];
//# sourceMappingURL=unit.validator.js.map