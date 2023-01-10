"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hsn_schema_1 = require("./hsn.schema");
const get = () => hsn_schema_1.hsnModel.find({ isDeleted: false });
const add = (hsnDetails) => hsn_schema_1.hsnModel.create(hsnDetails);
const deleteOne = (id) => hsn_schema_1.hsnModel.updateOne({ _id: id }, { $set: { isDeleted: true } });
const update = (id, updatedHsnDetails) => hsn_schema_1.hsnModel.updateOne({ _id: id }, { $set: Object.assign({}, updatedHsnDetails) });
exports.default = { get, add, deleteOne, update };
//# sourceMappingURL=hsn.repo.js.map