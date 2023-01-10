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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const order_constants_1 = require("./order.constants");
const order_repo_1 = __importDefault(require("./order.repo"));
const createOrder = (orderDetails) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { invoice } = orderDetails, details = __rest(orderDetails, ["invoice"]);
        let subTotal = 0;
        let cgstAmount = 0;
        let sgstAmount = 0;
        let igstAmount = 0;
        for (let product of invoice.products) {
            subTotal += product.quantity * product.rate;
            cgstAmount += subTotal * (product.hsn.cgst / 100);
            sgstAmount += subTotal * (product.hsn.sgst / 100);
            igstAmount += subTotal * (product.hsn.igst / 100);
        }
        const totalGstAmount = details.customerDetails.state.toLowerCase() === 'maharashtra' ? cgstAmount + sgstAmount : cgstAmount + igstAmount;
        const grandTotal = subTotal + totalGstAmount + invoice.shippingCharges + invoice.packingCharges;
        invoice = { products: invoice.products, shippingCharges: invoice.shippingCharges, packingCharges: invoice.packingCharges, subTotal: subTotal, cgst: cgstAmount, sgst: sgstAmount, igst: igstAmount, totalGstAmount: totalGstAmount, grandTotal: grandTotal };
        const payment = { totalAmount: grandTotal, remainingAmount: grandTotal };
        console.log(payment);
        const finalOrderDetails = Object.assign(Object.assign({}, details), { payment: payment, invoice: invoice });
        yield order_repo_1.default.add(finalOrderDetails);
        return order_constants_1.orderConstants.ORDER_PLACED;
    }
    catch (error) {
        console.log(error);
        throw order_constants_1.orderConstants.FAILED;
    }
});
const getOrders = (name, page) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield order_repo_1.default.get(name, page);
    }
    catch (error) {
        throw order_constants_1.orderConstants.FAILED;
    }
});
const updateAdminApproval = (id, status) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield order_repo_1.default.updateAdminApproval(id, status);
        return order_constants_1.orderConstants.ORDER_ACCEPTED;
    }
    catch (error) {
        console.log(error);
        throw order_constants_1.orderConstants.FAILED;
    }
});
const updateOrderStatus = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield order_repo_1.default.updateOrderStatus(id);
        return order_constants_1.orderConstants.ORDER_STATUS_UPDATED;
    }
    catch (error) {
        throw order_constants_1.orderConstants.FAILED;
    }
});
const getOneOrder = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield order_repo_1.default.getOne(id);
    }
    catch (error) {
        throw order_constants_1.orderConstants.FAILED;
    }
});
const assignFurnace = (productId, id, furnaceDetails) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getadminApproval = yield order_repo_1.default.getOne(id);
        if (getadminApproval[0].adminApproval === 'Pending')
            throw order_constants_1.orderConstants.FAILED;
        yield order_repo_1.default.assignFurnace(productId, id, furnaceDetails);
        return order_constants_1.orderConstants.FURNACE_ASSIGNED;
    }
    catch (error) {
        throw order_constants_1.orderConstants.FAILED;
    }
});
const assignStorage = (productId, orderId, storage) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield order_repo_1.default.assignStorage(productId, orderId, storage);
        return order_constants_1.orderConstants.STORAGE_ASSIGNED;
    }
    catch (error) {
        console.log(error);
        throw order_constants_1.orderConstants.FAILED;
    }
});
const makePayment = (orderId, paidAmount) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payment = yield order_repo_1.default.getAmount(orderId);
        const remainingAmount = payment[0].payment.remainingAmount;
        console.log(payment[0].payment.remainingAmount);
        if (remainingAmount >= 0 && paidAmount <= remainingAmount) {
            yield order_repo_1.default.updatePayment(orderId, paidAmount);
            return order_constants_1.orderConstants.PAYMENT_DONE;
        }
        throw order_constants_1.orderConstants.PAYMENT_FAILED;
    }
    catch (error) {
        console.log(error);
        throw order_constants_1.orderConstants.FAILED;
    }
});
const getRemainingAmount = (orderId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield order_repo_1.default.getAmount(orderId);
    }
    catch (error) {
        throw order_constants_1.orderConstants.FAILED;
    }
});
exports.default = {
    createOrder,
    getOrders,
    updateAdminApproval,
    updateOrderStatus,
    getOneOrder,
    assignFurnace,
    assignStorage,
    makePayment,
    getRemainingAmount
};
//# sourceMappingURL=order.service.js.map