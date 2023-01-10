"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.materialConstants = void 0;
const response_handler_1 = require("../../utility/response-handler");
exports.materialConstants = {
    MATERIAL_CREATED: new response_handler_1.MessageHandler(200, "Material Added SucessFully!!!"),
    MATERIAL_NOT_CREATED: new response_handler_1.MessageHandler(400, "Failed To Add Material!!!"),
    MATERIAL_UPDATED: new response_handler_1.MessageHandler(200, "Material Updated SucessFully!!!"),
    MATERIAL_NOT_UPDATED: new response_handler_1.MessageHandler(400, "Failed To Update Material!!!"),
    MATERIAL_DELETED: new response_handler_1.MessageHandler(200, "Material Deleted SucessFully!!!"),
    MATERIAL_NOT_DELETED: new response_handler_1.MessageHandler(400, "Failed To Delete Material!!!"),
    COULD_NOT_GET: new response_handler_1.MessageHandler(400, "Failed To Get Material!!!"),
};
//# sourceMappingURL=material.constants.js.map