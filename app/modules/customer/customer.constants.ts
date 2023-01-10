import { MessageHandler } from "../../utility/response-handler";

export const customerConstants = {
    CUSTOMER_CREATED:new MessageHandler(200,"CUSTOMER Created Sucessfully!!!"),
    CUSTOMER_UPDATED:new MessageHandler(200,"CUSTOMER Updated Sucessfully!!!"),
    CUSTOMER_DELETED:new MessageHandler(200,"CUSTOMER Deleted Sucessfully!!!"),
    FAILED_TO_CREATE: new MessageHandler(400,"Failed to Create CUSTOMER!!!"),
    FAILED_TO_GET:new MessageHandler(400,"Failed to Get CUSTOMERs!!!"),
    FAILED_TO_UPDATE:new MessageHandler(400,"Failed to Update CUSTOMER!!!"),
    FAILED_TO_DELETE:new MessageHandler(400,"Failed to Delete CUSTOMER!!!"),

}