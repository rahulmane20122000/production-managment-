"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentHistorySchema = void 0;
const base_schema_1 = require("../../utility/base.schema");
exports.paymentHistorySchema = new base_schema_1.BaseSchema({
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
    }
});
//# sourceMappingURL=payment.schema.js.map