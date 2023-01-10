"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.materialModel = exports.materialSchema = void 0;
const mongoose_1 = require("mongoose");
const base_schema_1 = require("../../utility/base.schema");
exports.materialSchema = new base_schema_1.BaseSchema({
    materialName: {
        type: String,
        required: true
    },
});
exports.materialModel = (0, mongoose_1.model)("material", exports.materialSchema);
//# sourceMappingURL=material.schema.js.map