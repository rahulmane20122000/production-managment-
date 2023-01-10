import { MessageHandler } from "../../utility/response-handler";

export const unitConstants = {
    UNITS_NOT_CREATED:new MessageHandler(400,"Failed to Save Units!!!"),
    UNITS_CREATED:new MessageHandler(200,"Units Saved To Database!!!"),
    UNITS_UPDATED:new MessageHandler(200,"Units Updated!!!"),
    UNITS_DELETED:new MessageHandler(200,"Units Deleted!!!"),
    CANT_GET:new MessageHandler(400,"Cannot Get Units!!!"),
    CANT_UPDATE:new MessageHandler(400,"Cannot Update Units!!!"),
    CANT_DELETE:new MessageHandler(400,"Cannot Delete Units!!!")
}