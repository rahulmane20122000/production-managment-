"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unitConstants = void 0;
const response_handler_1 = require("../../utility/response-handler");
exports.unitConstants = {
    UNITS_NOT_CREATED: new response_handler_1.MessageHandler(400, "Failed to Save Units!!!"),
    UNITS_CREATED: new response_handler_1.MessageHandler(200, "Units Saved To Database!!!"),
    UNITS_UPDATED: new response_handler_1.MessageHandler(200, "Units Updated!!!"),
    UNITS_DELETED: new response_handler_1.MessageHandler(200, "Units Deleted!!!"),
    CANT_GET: new response_handler_1.MessageHandler(400, "Cannot Get Units!!!"),
    CANT_UPDATE: new response_handler_1.MessageHandler(400, "Cannot Update Units!!!"),
    CANT_DELETE: new response_handler_1.MessageHandler(400, "Cannot Delete Units!!!")
};
//# sourceMappingURL=unit.constants.js.map