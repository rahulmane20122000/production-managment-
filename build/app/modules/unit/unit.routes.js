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
exports.unitsRouter = void 0;
const express_1 = require("express");
const response_handler_1 = require("../../utility/response-handler");
const unit_service_1 = __importDefault(require("./unit.service"));
const unit_validator_1 = require("./unit.validator");
exports.unitsRouter = (0, express_1.Router)();
exports.unitsRouter.get("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield unit_service_1.default.getUnits();
        res.send(new response_handler_1.ResponseHandler(response));
    }
    catch (error) {
        next(error);
    }
}));
exports.unitsRouter.post("/", unit_validator_1.UnitsValidator, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield unit_service_1.default.addUnit(req.body);
        res.send(new response_handler_1.ResponseHandler(response));
    }
    catch (error) {
        next(error);
    }
}));
exports.unitsRouter.put("/delete-unit/:id", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield unit_service_1.default.deleteUnit(req.params.id);
        res.send(new response_handler_1.ResponseHandler(response));
    }
    catch (error) {
        next(error);
    }
}));
exports.unitsRouter.put("/:id", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield unit_service_1.default.updateUnit(req.params.id, req.body);
        res.send(new response_handler_1.ResponseHandler(response));
    }
    catch (error) {
        next(error);
    }
}));
//# sourceMappingURL=unit.routes.js.map