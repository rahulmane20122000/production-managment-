import { MessageHandler } from "../../utility/response-handler";

export const invoiceConstants = {
    INVOICE_GENERATED:new MessageHandler(200,"Invoice Generated!!!"),
    FAILED_TO_GENERATE:new MessageHandler(400,"Failed To Generate!!!"),
    
}