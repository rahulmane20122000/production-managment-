import { IProduct } from "../product/product.types"

export interface Iinvoice{
    products: [IProduct];
    shippingCharges: number;
    packingCharges: number;
    subTotal: number;
    cgst: number;
    sgst: number;
    igst: number;
    totalGstAmount: number;
    grandTotal: number;
    totalAmountInWords?:string;
}