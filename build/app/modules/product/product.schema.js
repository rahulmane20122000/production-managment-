"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productSchema = void 0;
const base_schema_1 = require("../../utility/base.schema");
const furnace_schema_1 = require("../furnace/furnace.schema");
const hsn_schema_1 = require("../hsn/hsn.schema");
const material_schema_1 = require("../material/material.schema");
const storage_schema_1 = require("../storage/storage.schema");
exports.productSchema = new base_schema_1.BaseSchema({
    productName: {
        type: String,
        required: true
    },
    material: {
        type: material_schema_1.materialSchema,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    unit: {
        type: String,
        required: true
    },
    rate: {
        type: Number,
        required: true
    },
    totalAmount: {
        type: Number,
        default: 0
    },
    productStatus: {
        enum: ['Pending', 'Production', 'Complete', 'Closed'],
        type: String,
        default: 'Pending'
    },
    furnace: {
        type: furnace_schema_1.furnaceSchema,
        default: null
    },
    storage: {
        type: storage_schema_1.storageSchema,
        default: null
    },
    hsn: {
        type: hsn_schema_1.hsnSchema,
        required: true
    }
});
//# sourceMappingURL=product.schema.js.map