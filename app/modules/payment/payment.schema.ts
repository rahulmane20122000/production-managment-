import { BaseSchema } from "../../utility/base.schema";
import { paymentHistorySchema } from "../paymentHistory/payment.schema";

export const paymentSchema = new BaseSchema({
    totalAmount :{
        type:Number,
    },
    remainingAmount:{
        type:Number
    },
    paymentStatus:{
       enum:['Pending','Partial','Complete'],
       type:String,
       default:'Pending'
    },
    paymentHistory:{
        type:paymentHistorySchema
    }
});
