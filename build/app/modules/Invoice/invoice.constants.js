"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invoiceConstants = void 0;
const response_handler_1 = require("../../utility/response-handler");
exports.invoiceConstants = {
    INVOICE_GENERATED: new response_handler_1.MessageHandler(200, "Invoice Generated!!!"),
    FAILED_TO_GENERATE: new response_handler_1.MessageHandler(400, "Failed To Generate!!!"),
};
//# sourceMappingURL=invoice.constants.js.map