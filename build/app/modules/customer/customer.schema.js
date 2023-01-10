"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerModel = exports.customerSchema = void 0;
const mongoose_1 = require("mongoose");
const base_schema_1 = require("../../utility/base.schema");
exports.customerSchema = new base_schema_1.BaseSchema({
    customerName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    shippingAddress: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    }
});
exports.customerModel = (0, mongoose_1.model)('customer', exports.customerSchema);
//# sourceMappingURL=customer.schema.js.map