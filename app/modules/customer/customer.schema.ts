import { model } from "mongoose";
import { BaseSchema } from "../../utility/base.schema";
import { ICustomer } from "./customer.types";

export const customerSchema = new BaseSchema({
    customerName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique:true,
        required: true
    },
    shippingAddress: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    }
});

type ICustomerDocument = Document & ICustomer;

export const customerModel = model<ICustomerDocument>('customer', customerSchema);