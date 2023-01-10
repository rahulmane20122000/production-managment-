"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const furnace_schema_1 = require("./furnace.schema");
const get = () => furnace_schema_1.furnaceModel.find({ isDeleted: false });
const add = (furnaceDetails) => furnace_schema_1.furnaceModel.create(furnaceDetails);
const deleteOne = (id) => furnace_schema_1.furnaceModel.updateOne({ _id: id }, { $set: { isDeleted: true } });
const update = (id, updatedFurnaceDetails) => furnace_schema_1.furnaceModel.updateOne({ _id: id }, { $set: Object.assign({}, updatedFurnaceDetails) });
exports.default = { get, add, deleteOne, update };
//# sourceMappingURL=furnace.repo.js.map