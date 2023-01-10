"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderConstants = void 0;
const response_handler_1 = require("../../utility/response-handler");
exports.orderConstants = {
    FAILED: new response_handler_1.MessageHandler(400, "Failed"),
    ORDER_PLACED: new response_handler_1.MessageHandler(200, "Order Was Placed Sucessfully!!!"),
    ORDER_DELIVERED: new response_handler_1.MessageHandler(200, "Order Was DELIVERED Sucessfully!!!"),
    FURNACE_ASSIGNED: new response_handler_1.MessageHandler(200, "Furnace Was Assigned Sucessfully!!!"),
    STORAGE_ASSIGNED: new response_handler_1.MessageHandler(200, "STORAGE Was Assigned Sucessfully!!!"),
    ORDER_ACCEPTED: new response_handler_1.MessageHandler(200, "Order Accepted !!!"),
    ORDER_STATUS_UPDATED: new response_handler_1.MessageHandler(200, "Order Status Updated!!!"),
    PAYMENT_DONE: new response_handler_1.MessageHandler(200, "Payment Done!!!"),
    PAYMENT_FAILED: new response_handler_1.MessageHandler(400, "Enter a valid Amount!!!")
};
//# sourceMappingURL=order.constants.js.map