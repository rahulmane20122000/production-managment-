import { BaseSchema } from "../../utility/base.schema";

export const paymentHistorySchema = new BaseSchema({
    amount:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
    }
});