"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FurnaceValidator = void 0;
const express_validator_1 = require("express-validator");
const validate_1 = require("../../utility/validate");
exports.FurnaceValidator = [
    (0, express_validator_1.body)("furnaceName").isString().notEmpty().withMessage("furnaceName is required"),
    validate_1.validate,
];
//# sourceMappingURL=furnace.validator.js.map