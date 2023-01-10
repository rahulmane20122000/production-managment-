"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const storage_schema_1 = require("./storage.schema");
const add = (storageDetails) => storage_schema_1.storageModel.create(storageDetails);
const get = () => storage_schema_1.storageModel.find();
const update = (id, updatedStorage) => storage_schema_1.storageModel.updateOne({ _id: id }, Object.assign({}, updatedStorage));
const deleteOne = (id) => storage_schema_1.storageModel.updateOne({ _id: id }, { $set: { isDeleted: true } });
exports.default = { add, get, update, deleteOne };
//# sourceMappingURL=storage.repo.js.map