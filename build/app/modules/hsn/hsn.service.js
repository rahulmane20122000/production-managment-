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
const hsn_constants_1 = require("./hsn.constants");
const hsn_repo_1 = __importDefault(require("./hsn.repo"));
const getAllHsn = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield hsn_repo_1.default.get();
    }
    catch (error) {
        throw hsn_constants_1.hsnConstants.CANNOT_GET_HSN;
    }
});
const createHsn = (hsnDetails) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield hsn_repo_1.default.add(hsnDetails);
        return hsn_constants_1.hsnConstants.HSN_CREATED;
    }
    catch (error) {
        throw hsn_constants_1.hsnConstants.CANNOT_CREATE_HSN;
    }
});
const updateHsn = (id, updatedHsnDetails) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield hsn_repo_1.default.update(id, updatedHsnDetails);
        return hsn_constants_1.hsnConstants.HSN_UPDATED;
    }
    catch (error) {
        throw hsn_constants_1.hsnConstants.CANNOT_UPDATE_HSN;
    }
});
const deleteHsn = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield hsn_repo_1.default.deleteOne(id);
        return hsn_constants_1.hsnConstants.HSN_DELETED;
    }
    catch (error) {
        throw hsn_constants_1.hsnConstants.CANNOT_DELETE_HSN;
    }
});
exports.default = { getAllHsn, createHsn, deleteHsn, updateHsn };
//# sourceMappingURL=hsn.service.js.map