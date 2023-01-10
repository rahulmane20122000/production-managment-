"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const storage_constants_1 = require("./storage.constants");
const storage_repo_1 = __importDefault(require("./storage.repo"));
const createStorage = (storageDetails) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield storage_repo_1.default.add(storageDetails);
        return storage_constants_1.storageConstants.STORAGE_CREATED;
    }
    catch (error) {
        throw storage_constants_1.storageConstants.COULD_NOT_CREATE;
    }
});
const getAllStorage = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield storage_repo_1.default.get();
    }
    catch (error) {
        throw storage_constants_1.storageConstants.COULD_NOT_GET;
    }
});
const updateStorage = (id, updatedStorage) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield storage_repo_1.default.update(id, updatedStorage);
        return storage_constants_1.storageConstants.STORAGE_UPDATED;
    }
    catch (error) {
        throw storage_constants_1.storageConstants.COULD_NOT_UPDATE;
    }
});
const deleteStorage = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield storage_repo_1.default.deleteOne(id);
        return storage_constants_1.storageConstants.STORAGE_DELETED;
    }
    catch (error) {
        throw storage_constants_1.storageConstants.COULD_NOT_DELETE;
    }
});
exports.default = { createStorage, getAllStorage, updateStorage, deleteStorage };
//# sourceMappingURL=storage.service.js.map