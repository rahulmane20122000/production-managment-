"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerConstants = void 0;
const response_handler_1 = require("../../utility/response-handler");
exports.customerConstants = {
    CUSTOMER_CREATED: new response_handler_1.MessageHandler(200, "CUSTOMER Created Sucessfully!!!"),
    CUSTOMER_UPDATED: new response_handler_1.MessageHandler(200, "CUSTOMER Updated Sucessfully!!!"),
    CUSTOMER_DELETED: new response_handler_1.MessageHandler(200, "CUSTOMER Deleted Sucessfully!!!"),
    FAILED_TO_CREATE: new response_handler_1.MessageHandler(400, "Failed to Create CUSTOMER!!!"),
    FAILED_TO_GET: new response_handler_1.MessageHandler(400, "Failed to Get CUSTOMERs!!!"),
    FAILED_TO_UPDATE: new response_handler_1.MessageHandler(400, "Failed to Update CUSTOMER!!!"),
    FAILED_TO_DELETE: new response_handler_1.MessageHandler(400, "Failed to Delete CUSTOMER!!!"),
};
//# sourceMappingURL=customer.constants.js.map