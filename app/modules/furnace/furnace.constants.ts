import { MessageHandler } from "../../utility/response-handler";

export const furnaceConstants = {
    CANNOT_GET_FURNACE:new MessageHandler(400,"Cannot fetch furnace!!!"),
    CANNOT_CREATE_FURNACE:new MessageHandler(400,"Cannot Create furnace!!!"),
    CANNOT_DELETE_FURNACE:new MessageHandler(400,"Cannot Delete furnace!!!"),
    CANNOT_UPDATE_FURNACE:new MessageHandler(400,"Cannot Update furnace!!!"),
    FURNACE_CREATED:new MessageHandler(200,"furnace Created!!!"),
    FURNACE_DELETED:new MessageHandler(200,"furnace Deleted!!!"),
    FURNACE_UPDATED:new MessageHandler(200,"furnace Updated!!!"),
}