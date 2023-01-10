import { IPaymentHistory } from "../paymentHistory/payment.types";

export interface IPayment {
    totalAmount :number;
    remainingAmount:number;
    paymentStatus?:string;
    paymentHistory?:IPaymentHistory
}