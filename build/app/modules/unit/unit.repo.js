"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unit_schema_1 = require("./unit.schema");
const add = (unitDetails) => unit_schema_1.unitModel.create(unitDetails);
const get = () => unit_schema_1.unitModel.find({ isDeleted: false });
const update = (id, updatedUnitDetails) => unit_schema_1.unitModel.updateOne({ _id: id }, { $set: Object.assign({}, updatedUnitDetails) });
const deleteOne = (id) => unit_schema_1.unitModel.updateOne({ _id: id }, { $set: { isDeleted: true } });
exports.default = { add, get, update, deleteOne };
//# sourceMappingURL=unit.repo.js.map