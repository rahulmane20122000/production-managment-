"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentSchema = void 0;
const base_schema_1 = require("../../utility/base.schema");
const payment_schema_1 = require("../paymentHistory/payment.schema");
exports.paymentSchema = new base_schema_1.BaseSchema({
    totalAmount: {
        type: Number,
    },
    remainingAmount: {
        type: Number
    },
    paymentStatus: {
        enum: ['Pending', 'Partial', 'Complete'],
        type: String,
        default: 'Pending'
    },
    paymentHistory: {
        type: payment_schema_1.paymentHistorySchema
    }
});
//# sourceMappingURL=payment.schema.js.map