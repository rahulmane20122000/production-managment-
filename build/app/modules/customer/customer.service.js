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
const customer_constants_1 = require("./customer.constants");
const customer_repo_1 = __importDefault(require("./customer.repo"));
const createCustomer = (customerDetails) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield customer_repo_1.default.add(customerDetails);
        return customer_constants_1.customerConstants.CUSTOMER_CREATED;
    }
    catch (error) {
        throw customer_constants_1.customerConstants.FAILED_TO_CREATE;
    }
});
const getAllCustomer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield customer_repo_1.default.get();
    }
    catch (error) {
        throw customer_constants_1.customerConstants.FAILED_TO_GET;
    }
});
const updateCustomer = (id, updatedCustomerDetails) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield customer_repo_1.default.update(id, updatedCustomerDetails);
        return customer_constants_1.customerConstants.CUSTOMER_UPDATED;
    }
    catch (error) {
        throw customer_constants_1.customerConstants.FAILED_TO_UPDATE;
    }
});
const deleteCustomer = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield customer_repo_1.default.deleteOne(id);
        return customer_constants_1.customerConstants.CUSTOMER_DELETED;
    }
    catch (error) {
        throw customer_constants_1.customerConstants.FAILED_TO_DELETE;
    }
});
exports.default = { createCustomer, getAllCustomer, updateCustomer, deleteCustomer };
//# sourceMappingURL=customer.service.js.map