"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const material_schema_1 = require("./material.schema");
const add = (materialDetails) => material_schema_1.materialModel.create(materialDetails);
const get = () => material_schema_1.materialModel.find({ isDeleted: false });
const update = (id, updatedMaterialDetails) => material_schema_1.materialModel.updateOne({ _id: id }, { $set: Object.assign({}, updatedMaterialDetails) });
const deleteOne = (id) => material_schema_1.materialModel.updateOne({ _id: id }, { $set: { isDeleted: true } });
exports.default = { add, get, update, deleteOne };
//# sourceMappingURL=material.repo.js.map