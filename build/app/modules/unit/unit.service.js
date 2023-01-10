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
const unit_constants_1 = require("./unit.constants");
const unit_repo_1 = __importDefault(require("./unit.repo"));
const addUnit = (unitDetails) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield unit_repo_1.default.add(unitDetails);
        return unit_constants_1.unitConstants.UNITS_CREATED;
    }
    catch (error) {
        throw unit_constants_1.unitConstants.UNITS_NOT_CREATED;
    }
});
const getUnits = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield unit_repo_1.default.get();
    }
    catch (error) {
        throw unit_constants_1.unitConstants.CANT_GET;
    }
});
const updateUnit = (id, updatedUnits) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield unit_repo_1.default.update(id, updatedUnits);
        return unit_constants_1.unitConstants.UNITS_UPDATED;
    }
    catch (error) {
        throw unit_constants_1.unitConstants.CANT_UPDATE;
    }
});
const deleteUnit = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield unit_repo_1.default.deleteOne(id);
        return unit_constants_1.unitConstants.UNITS_DELETED;
    }
    catch (error) {
        throw unit_constants_1.unitConstants.CANT_DELETE;
    }
});
exports.default = { addUnit, getUnits, updateUnit, deleteUnit };
//# sourceMappingURL=unit.service.js.map