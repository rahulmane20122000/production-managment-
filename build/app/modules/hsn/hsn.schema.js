"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hsnModel = exports.hsnSchema = void 0;
const mongoose_1 = require("mongoose");
const base_schema_1 = require("../../utility/base.schema");
exports.hsnSchema = new base_schema_1.BaseSchema({
    hsnCode: {
        type: String,
        required: true
    },
    productDescription: {
        type: String,
        required: true
    },
    cgst: {
        type: Number,
        required: true
    },
    sgst: {
        type: Number,
        required: true
    },
    igst: {
        type: Number,
        required: true
    }
});
exports.hsnModel = (0, mongoose_1.model)("hsncodes", exports.hsnSchema);
//# sourceMappingURL=hsn.schema.js.map