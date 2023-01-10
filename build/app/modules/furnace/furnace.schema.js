"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.furnaceModel = exports.furnaceSchema = void 0;
const mongoose_1 = require("mongoose");
const base_schema_1 = require("../../utility/base.schema");
exports.furnaceSchema = new base_schema_1.BaseSchema({
    furnaceName: {
        type: String,
    },
    isOccupied: {
        type: Boolean,
        default: false
    }
});
exports.furnaceModel = (0, mongoose_1.model)('furnace', exports.furnaceSchema);
//# sourceMappingURL=furnace.schema.js.map