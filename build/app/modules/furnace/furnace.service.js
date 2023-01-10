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
const furnace_constants_1 = require("./furnace.constants");
const furnace_repo_1 = __importDefault(require("./furnace.repo"));
const getAllFurnace = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield furnace_repo_1.default.get();
    }
    catch (error) {
        throw furnace_constants_1.furnaceConstants.CANNOT_GET_FURNACE;
    }
});
const createFurnace = (furnaceDetails) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield furnace_repo_1.default.add(furnaceDetails);
        return furnace_constants_1.furnaceConstants.FURNACE_CREATED;
    }
    catch (error) {
        throw furnace_constants_1.furnaceConstants.CANNOT_CREATE_FURNACE;
    }
});
const updateFurnace = (id, updatedFurnaceDetails) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield furnace_repo_1.default.update(id, updatedFurnaceDetails);
        return furnace_constants_1.furnaceConstants.FURNACE_UPDATED;
    }
    catch (error) {
        throw furnace_constants_1.furnaceConstants.CANNOT_UPDATE_FURNACE;
    }
});
const deleteFurnace = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield furnace_repo_1.default.deleteOne(id);
        return furnace_constants_1.furnaceConstants.FURNACE_DELETED;
    }
    catch (error) {
        throw furnace_constants_1.furnaceConstants.CANNOT_DELETE_FURNACE;
    }
});
exports.default = { getAllFurnace, createFurnace, deleteFurnace, updateFurnace };
//# sourceMappingURL=furnace.service.js.map