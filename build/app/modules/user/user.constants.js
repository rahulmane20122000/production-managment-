"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userConstants = void 0;
const response_handler_1 = require("../../utility/response-handler");
exports.userConstants = {
    NOT_FOUND: new response_handler_1.MessageHandler(404, 'USER NOT FOUND!'),
    USER_ADDED: new response_handler_1.MessageHandler(201, 'USER ADDED!'),
    USER_UPDATED: new response_handler_1.MessageHandler(200, 'USER UPDATED!'),
    USER_DELETED: new response_handler_1.MessageHandler(200, 'USER DELETED!'),
    UNIQUE_EMAIL: new response_handler_1.MessageHandler(406, 'EMAIL MUST BE UNIQUE!')
};
//# sourceMappingURL=user.constants.js.map