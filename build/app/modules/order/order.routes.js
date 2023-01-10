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
exports.orderRouter = void 0;
const express_1 = require("express");
const response_handler_1 = require("../../utility/response-handler");
const order_service_1 = __importDefault(require("./order.service"));
exports.orderRouter = (0, express_1.Router)();
exports.orderRouter.post('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield order_service_1.default.createOrder(req.body);
        res.send(new response_handler_1.ResponseHandler(response));
    }
    catch (error) {
        next(error);
    }
}));
exports.orderRouter.get("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield order_service_1.default.getOrders(req.query.name, Number(req.query.page));
        res.send(new response_handler_1.ResponseHandler(response));
    }
    catch (error) {
        next(error);
    }
}));
exports.orderRouter.put("/assign-furnace", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId, orderId, furnaceDetails } = req.body;
        const response = yield order_service_1.default.assignFurnace(productId, orderId, furnaceDetails);
        res.send(new response_handler_1.ResponseHandler(response));
    }
    catch (error) {
        next(error);
    }
}));
exports.orderRouter.put("/assign-storage", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId, orderId, storage } = req.body;
        const response = yield order_service_1.default.assignStorage(productId, orderId, storage);
        res.send(new response_handler_1.ResponseHandler(response));
    }
    catch (error) {
        next(error);
    }
}));
exports.orderRouter.get('/remaining-payment/:orderId', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield order_service_1.default.getRemainingAmount(req.params.orderId);
        res.send(new response_handler_1.ResponseHandler({ remainingAmount: response[0].payment.remainingAmount }));
    }
    catch (error) {
        next(error);
    }
}));
exports.orderRouter.put('/make-payment/:orderId', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { paidAmount } = req.body;
        const response = yield order_service_1.default.makePayment(req.params.orderId, paidAmount);
        res.send(new response_handler_1.ResponseHandler(response));
    }
    catch (error) {
        next(error);
    }
}));
exports.orderRouter.put("/admin-approve/:id", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield order_service_1.default.updateAdminApproval(req.params.id, req.body);
        res.send(new response_handler_1.ResponseHandler(response));
    }
    catch (error) {
        next(error);
    }
}));
exports.orderRouter.get('/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield order_service_1.default.getOneOrder(req.params.id);
        res.send(new response_handler_1.ResponseHandler(response));
    }
    catch (error) {
        next(error);
    }
}));
exports.orderRouter.put("/:id", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield order_service_1.default.updateOrderStatus(req.params.id);
        res.send(new response_handler_1.ResponseHandler(response));
    }
    catch (error) {
        next(error);
    }
}));
//# sourceMappingURL=order.routes.js.map