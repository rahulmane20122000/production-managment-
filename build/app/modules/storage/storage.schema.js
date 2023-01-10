"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storageModel = exports.storageSchema = void 0;
const mongoose_1 = require("mongoose");
const base_schema_1 = require("../../utility/base.schema");
exports.storageSchema = new base_schema_1.BaseSchema({
    building: {
        type: String,
    },
    shelf: {
        type: String,
    },
    row: {
        type: String,
    },
    rack: {
        type: String,
    }
});
exports.storageModel = (0, mongoose_1.model)('Storage', exports.storageSchema);
//# sourceMappingURL=storage.schema.js.map