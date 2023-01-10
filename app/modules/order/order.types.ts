import { ICustomer } from "../customer/customer.types"
import { Iinvoice } from "../Invoice/invoice.types";
import { IPayment } from "../payment/payment.types";


export interface IOrder{
    customerDetails:ICustomer;
    invoice:Iinvoice;
    payment:IPayment
    orderStatus?:string;
    adminApproval:string
}