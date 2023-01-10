"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hsnConstants = void 0;
const response_handler_1 = require("../../utility/response-handler");
exports.hsnConstants = {
    CANNOT_GET_HSN: new response_handler_1.MessageHandler(400, "Cannot fetch HSN!!!"),
    CANNOT_CREATE_HSN: new response_handler_1.MessageHandler(400, "Cannot Create HSN!!!"),
    CANNOT_DELETE_HSN: new response_handler_1.MessageHandler(400, "Cannot Delete HSN!!!"),
    CANNOT_UPDATE_HSN: new response_handler_1.MessageHandler(400, "Cannot Update HSN!!!"),
    HSN_CREATED: new response_handler_1.MessageHandler(200, "HSN Created!!!"),
    HSN_DELETED: new response_handler_1.MessageHandler(200, "HSN Deleted!!!"),
    HSN_UPDATED: new response_handler_1.MessageHandler(200, "HSN Updated!!!"),
};
//# sourceMappingURL=hsn.constants.js.map