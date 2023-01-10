"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageValidator = void 0;
const express_validator_1 = require("express-validator");
const validate_1 = require("../../utility/validate");
exports.StorageValidator = [
    (0, express_validator_1.body)("buildingName").isString().notEmpty().withMessage("buildingName is required"),
    (0, express_validator_1.body)("shelf").isString().notEmpty().withMessage("shelf is required"),
    (0, express_validator_1.body)("row").isString().notEmpty().withMessage("row is required"),
    (0, express_validator_1.body)("rack").isString().notEmpty().withMessage("rack is required"),
    validate_1.validate,
];
//# sourceMappingURL=storage.validator.js.map