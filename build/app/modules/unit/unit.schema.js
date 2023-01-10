"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unitModel = exports.unitSchema = void 0;
const mongoose_1 = require("mongoose");
const base_schema_1 = require("../../utility/base.schema");
exports.unitSchema = new base_schema_1.BaseSchema({
    unit: {
        type: String,
        required: true
    },
    rate: {
        type: Number,
        required: true
    }
});
exports.unitModel = (0, mongoose_1.model)("units", exports.unitSchema);
//# sourceMappingURL=unit.schema.js.map