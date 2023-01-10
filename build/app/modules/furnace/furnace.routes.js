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
exports.furnaceRouter = void 0;
const express_1 = require("express");
const response_handler_1 = require("../../utility/response-handler");
const furnace_service_1 = __importDefault(require("./furnace.service"));
const furnace_validator_1 = require("./furnace.validator");
exports.furnaceRouter = (0, express_1.Router)();
exports.furnaceRouter.get('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield furnace_service_1.default.getAllFurnace();
        res.send(new response_handler_1.ResponseHandler(response));
    }
    catch (error) {
        next(error);
    }
}));
exports.furnaceRouter.post('/', furnace_validator_1.FurnaceValidator, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield furnace_service_1.default.createFurnace(req.body);
        res.send(new response_handler_1.ResponseHandler(response));
    }
    catch (error) {
        next(error);
    }
}));
exports.furnaceRouter.put('/updateFurnace/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield furnace_service_1.default.updateFurnace(req.params.id, req.body);
        res.send(response);
    }
    catch (error) {
        next(error);
    }
}));
exports.furnaceRouter.put('/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield furnace_service_1.default.deleteFurnace(req.params.id);
        res.send(new response_handler_1.ResponseHandler(response));
    }
    catch (error) {
        next(error);
    }
}));
//# sourceMappingURL=furnace.routes.js.map