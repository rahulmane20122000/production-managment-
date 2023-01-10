"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.materialValidator = void 0;
const express_validator_1 = require("express-validator");
const validate_1 = require("../../utility/validate");
exports.materialValidator = [
    (0, express_validator_1.body)("materialName").isString().notEmpty().withMessage("Material-Name is required"),
    validate_1.validate,
];
//# sourceMappingURL=material.validator.js.map