"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invoiceSchema = void 0;
const base_schema_1 = require("../../utility/base.schema");
const product_schema_1 = require("../product/product.schema");
exports.invoiceSchema = new base_schema_1.BaseSchema({
    products: {
        type: [product_schema_1.productSchema],
        required: true
    },
    shippingCharges: {
        type: Number,
        required: true
    },
    packingCharges: {
        type: Number,
        required: true
    },
    subTotal: {
        type: Number,
        default: 0
    },
    cgst: {
        type: Number,
        default: 0
    },
    sgst: {
        type: Number,
        default: 0
    },
    igst: {
        type: Number,
        default: 0
    },
    totalGstAmount: {
        type: Number,
        default: 0
    },
    grandTotal: {
        type: Number,
        default: 0
    },
    totalAmountInWords: {
        type: String,
        default: ""
    }
});
//# sourceMappingURL=invoice.schema.js.map