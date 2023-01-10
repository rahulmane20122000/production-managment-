import { MessageHandler } from "../../utility/response-handler";

export const orderConstants = { 
  FAILED:new MessageHandler(400,"Failed"),
  ORDER_PLACED:new MessageHandler(200,"Order Was Placed Sucessfully!!!"),
  ORDER_DELIVERED:new MessageHandler(200,"Order Was DELIVERED Sucessfully!!!"),
  FURNACE_ASSIGNED:new MessageHandler(200,"Furnace Was Assigned Sucessfully!!!"),
  STORAGE_ASSIGNED:new MessageHandler(200,"STORAGE Was Assigned Sucessfully!!!"),
  ORDER_ACCEPTED:new MessageHandler(200,"Order Accepted !!!"),
  ORDER_STATUS_UPDATED:new MessageHandler(200,"Order Status Updated!!!"),
  PAYMENT_DONE:new MessageHandler(200,"Payment Done!!!"),
  PAYMENT_FAILED: new MessageHandler(400,"Enter a valid Amount!!!")
}