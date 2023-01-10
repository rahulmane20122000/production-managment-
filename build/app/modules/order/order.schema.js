"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderModel = exports.orderSchema = void 0;
const mongoose_1 = require("mongoose");
const base_schema_1 = require("../../utility/base.schema");
const customer_schema_1 = require("../customer/customer.schema");
const invoice_schema_1 = require("../Invoice/invoice.schema");
const payment_schema_1 = require("../payment/payment.schema");
exports.orderSchema = new base_schema_1.BaseSchema({
    customerDetails: {
        type: customer_schema_1.customerSchema,
        required: true
    },
    invoice: {
        type: invoice_schema_1.invoiceSchema,
        required: true
    },
    payment: {
        type: payment_schema_1.paymentSchema
    },
    orderStatus: {
        enum: ['Pending', 'Production', 'Complete', 'Closed'],
        type: String,
        default: 'Pending'
    },
    adminApproval: {
        enum: ['Accepted', 'Rejected', 'Pending'],
        type: String,
        default: 'Pending'
    },
    startDate: {
        type: Date
    },
    endDate: {
        type: Date
    },
});
exports.orderModel = (0, mongoose_1.model)('order', exports.orderSchema);
//# sourceMappingURL=order.schema.js.map