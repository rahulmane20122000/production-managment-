import { MessageHandler } from "../../utility/response-handler";

export const hsnConstants = {
    CANNOT_GET_HSN:new MessageHandler(400,"Cannot fetch HSN!!!"),
    CANNOT_CREATE_HSN:new MessageHandler(400,"Cannot Create HSN!!!"),
    CANNOT_DELETE_HSN:new MessageHandler(400,"Cannot Delete HSN!!!"),
    CANNOT_UPDATE_HSN:new MessageHandler(400,"Cannot Update HSN!!!"),
    HSN_CREATED:new MessageHandler(200,"HSN Created!!!"),
    HSN_DELETED:new MessageHandler(200,"HSN Deleted!!!"),
    HSN_UPDATED:new MessageHandler(200,"HSN Updated!!!"),
}