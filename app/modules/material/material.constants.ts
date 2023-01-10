import { MessageHandler } from "../../utility/response-handler";

export const materialConstants = {
    MATERIAL_CREATED:new MessageHandler(200,"Material Added SucessFully!!!"),
    MATERIAL_NOT_CREATED:new MessageHandler(400,"Failed To Add Material!!!"),
    MATERIAL_UPDATED:new MessageHandler(200,"Material Updated SucessFully!!!"),
    MATERIAL_NOT_UPDATED:new MessageHandler(400,"Failed To Update Material!!!"),
    MATERIAL_DELETED:new MessageHandler(200,"Material Deleted SucessFully!!!"),
    MATERIAL_NOT_DELETED:new MessageHandler(400,"Failed To Delete Material!!!"),
    COULD_NOT_GET:new MessageHandler(400,"Failed To Get Material!!!"),

}