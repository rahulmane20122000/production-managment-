"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.furnaceConstants = void 0;
const response_handler_1 = require("../../utility/response-handler");
exports.furnaceConstants = {
    CANNOT_GET_FURNACE: new response_handler_1.MessageHandler(400, "Cannot fetch furnace!!!"),
    CANNOT_CREATE_FURNACE: new response_handler_1.MessageHandler(400, "Cannot Create furnace!!!"),
    CANNOT_DELETE_FURNACE: new response_handler_1.MessageHandler(400, "Cannot Delete furnace!!!"),
    CANNOT_UPDATE_FURNACE: new response_handler_1.MessageHandler(400, "Cannot Update furnace!!!"),
    FURNACE_CREATED: new response_handler_1.MessageHandler(200, "furnace Created!!!"),
    FURNACE_DELETED: new response_handler_1.MessageHandler(200, "furnace Deleted!!!"),
    FURNACE_UPDATED: new response_handler_1.MessageHandler(200, "furnace Updated!!!"),
};
//# sourceMappingURL=furnace.constants.js.map