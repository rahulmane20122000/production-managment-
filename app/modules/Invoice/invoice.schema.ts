import { model } from "mongoose";
import { BaseSchema } from "../../utility/base.schema";
import { productSchema } from "../product/product.schema";
import { Iinvoice } from "./invoice.types";

export const invoiceSchema = new BaseSchema({
    products: {
        type: [productSchema],
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
