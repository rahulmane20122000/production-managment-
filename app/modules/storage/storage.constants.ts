import { MessageHandler } from "../../utility/response-handler";

export const storageConstants = {
    COULD_NOT_CREATE:new MessageHandler(400,"Cannot create Storage!!!"),
    COULD_NOT_UPDATE:new MessageHandler(400,"Cannot Update Storage!!!"),
    COULD_NOT_GET:new MessageHandler(400,"Cannot Get Storage!!!"),
    COULD_NOT_DELETE:new MessageHandler(400,"Cannot Get Delete!!!"),
    STORAGE_CREATED:new MessageHandler(200,"Storage Created!!!"),
    STORAGE_UPDATED:new MessageHandler(200,"Storage Updated!!!"),
    STORAGE_DELETED:new MessageHandler(200,"Storage Deleted!!!"),
}