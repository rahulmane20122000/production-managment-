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
exports.materialRouter = void 0;
const express_1 = require("express");
const response_handler_1 = require("../../utility/response-handler");
const material_service_1 = __importDefault(require("./material.service"));
const material_validator_1 = require("./material.validator");
exports.materialRouter = (0, express_1.Router)();
exports.materialRouter.get('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield material_service_1.default.getMaterial();
        res.send(new response_handler_1.ResponseHandler(response));
    }
    catch (error) {
        next(error);
    }
}));
exports.materialRouter.post('/', material_validator_1.materialValidator, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield material_service_1.default.addMaterial(req.body);
        res.send(new response_handler_1.ResponseHandler(response));
    }
    catch (error) {
        next(error);
    }
}));
exports.materialRouter.put('/update/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield material_service_1.default.updateMaterial(req.params.id, req.body);
        res.send(new response_handler_1.ResponseHandler(response));
    }
    catch (error) {
        next(error);
    }
}));
exports.materialRouter.put('/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield material_service_1.default.deleteMaterial(req.params.id);
        res.send(new response_handler_1.ResponseHandler(response));
    }
    catch (error) {
        next(error);
    }
}));
//# sourceMappingURL=material.routes.js.map