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
exports.hsnRouter = void 0;
const express_1 = require("express");
const response_handler_1 = require("../../utility/response-handler");
const hsn_service_1 = __importDefault(require("./hsn.service"));
const hsn_validators_1 = require("./hsn.validators");
exports.hsnRouter = (0, express_1.Router)();
exports.hsnRouter.get('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield hsn_service_1.default.getAllHsn();
        res.send(new response_handler_1.ResponseHandler(response));
    }
    catch (error) {
        next(error);
    }
}));
exports.hsnRouter.post('/', hsn_validators_1.hsnValidator, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield hsn_service_1.default.createHsn(req.body);
        res.send(new response_handler_1.ResponseHandler(response));
    }
    catch (error) {
        next(error);
    }
}));
exports.hsnRouter.put('/updateHsn/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield hsn_service_1.default.updateHsn(req.params.id, req.body);
        res.send(new response_handler_1.ResponseHandler(response));
    }
    catch (error) {
        next(error);
    }
}));
exports.hsnRouter.put('/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield hsn_service_1.default.deleteHsn(req.params.id);
        res.send(new response_handler_1.ResponseHandler(response));
    }
    catch (error) {
        next(error);
    }
}));
//# sourceMappingURL=hsn.routes.js.map