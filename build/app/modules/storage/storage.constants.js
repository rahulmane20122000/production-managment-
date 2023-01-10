"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storageConstants = void 0;
const response_handler_1 = require("../../utility/response-handler");
exports.storageConstants = {
    COULD_NOT_CREATE: new response_handler_1.MessageHandler(400, "Cannot create Storage!!!"),
    COULD_NOT_UPDATE: new response_handler_1.MessageHandler(400, "Cannot Update Storage!!!"),
    COULD_NOT_GET: new response_handler_1.MessageHandler(400, "Cannot Get Storage!!!"),
    COULD_NOT_DELETE: new response_handler_1.MessageHandler(400, "Cannot Get Delete!!!"),
    STORAGE_CREATED: new response_handler_1.MessageHandler(200, "Storage Created!!!"),
    STORAGE_UPDATED: new response_handler_1.MessageHandler(200, "Storage Updated!!!"),
    STORAGE_DELETED: new response_handler_1.MessageHandler(200, "Storage Deleted!!!"),
};
//# sourceMappingURL=storage.constants.js.map