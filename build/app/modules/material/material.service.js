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
const material_constants_1 = require("./material.constants");
const material_repo_1 = __importDefault(require("./material.repo"));
const addMaterial = (materialDetails) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield material_repo_1.default.add(materialDetails);
        return material_constants_1.materialConstants.MATERIAL_CREATED;
    }
    catch (error) {
        throw material_constants_1.materialConstants.MATERIAL_NOT_CREATED;
    }
});
const getMaterial = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield material_repo_1.default.get();
    }
    catch (error) {
        throw material_constants_1.materialConstants.COULD_NOT_GET;
    }
});
const updateMaterial = (id, updatedMaterial) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield material_repo_1.default.update(id, updatedMaterial);
        return material_constants_1.materialConstants.MATERIAL_UPDATED;
    }
    catch (error) {
        throw material_constants_1.materialConstants.MATERIAL_NOT_UPDATED;
    }
});
const deleteMaterial = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield material_repo_1.default.deleteOne(id);
        return material_constants_1.materialConstants.MATERIAL_DELETED;
    }
    catch (error) {
        throw material_constants_1.materialConstants.MATERIAL_NOT_DELETED;
    }
});
exports.default = { addMaterial, getMaterial, updateMaterial, deleteMaterial };
//# sourceMappingURL=material.service.js.map