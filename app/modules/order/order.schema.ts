import { model } from "mongoose";
import { BaseSchema } from "../../utility/base.schema";
import { customerSchema } from "../customer/customer.schema";
import { invoiceSchema } from "../Invoice/invoice.schema";
import { paymentSchema } from "../payment/payment.schema";
import { productSchema } from "../product/product.schema";
import { IOrder } from "./order.types";

export const orderSchema = new BaseSchema({
    customerDetails:{
        type:customerSchema,
        required:true
    },
    invoice:{
        type:invoiceSchema,
        required:true
    },
    payment:{
        type:paymentSchema
    },
    orderStatus:{
        enum:['Pending','Production','Complete','Closed'],
        type:String,
        default:'Pending'
    },
    adminApproval:{
        enum:['Accepted','Rejected','Pending'],
        type:String,
        default:'Pending'
    },
    startDate:{
        type:Date
    },
    endDate:{
        type:Date
    },
});


type IOrderDocument = Document & IOrder;

export const orderModel = model<IOrderDocument>('order',orderSchema);