import { IFurnace } from "../furnace/furnace.types";
import { IStorage } from "../storage/storage.type";
import { orderConstants } from "./order.constants"
import orderRepo from "./order.repo";
import { IOrder } from "./order.types";

const createOrder = async (orderDetails: IOrder) => {
    try {
        let { invoice, ...details } = orderDetails;
        let subTotal = 0;
        let cgstAmount = 0;
        let sgstAmount = 0;
        let igstAmount = 0;

        for (let product of invoice.products) {
            subTotal += product.quantity * product.rate;
        }
        for(let product of invoice.products){
            cgstAmount+= subTotal * (product.hsn.cgst/100);
            sgstAmount+= subTotal * (product.hsn.cgst/100);
            igstAmount+= subTotal * (product.hsn.cgst/100);
        }
        const totalGstAmount = details.customerDetails.state.toLowerCase() === 'maharashtra' ? cgstAmount + sgstAmount : cgstAmount + igstAmount;
        const grandTotal = subTotal + totalGstAmount + invoice.shippingCharges + invoice.packingCharges;
        invoice = { products: invoice.products, shippingCharges: invoice.shippingCharges, packingCharges: invoice.packingCharges, subTotal: subTotal, cgst: cgstAmount, sgst: sgstAmount, igst: igstAmount, totalGstAmount: totalGstAmount, grandTotal: grandTotal }
        const payment = { totalAmount: grandTotal, remainingAmount: grandTotal }
       
        const finalOrderDetails = { ...details, payment: payment, invoice: invoice }
        await orderRepo.add(finalOrderDetails);
        return orderConstants.ORDER_PLACED
    } catch (error) {
        console.log(error);
        throw orderConstants.FAILED
    }
}

const getOrders = async ( page?: number) => {
    try {
        return await orderRepo.get(page);
    } catch (error) {
        throw orderConstants.FAILED;
    }
}

const updateAdminApproval = async (id: string, status: boolean) => {
    try {
        await orderRepo.updateAdminApproval(id, status);
        return orderConstants.ORDER_ACCEPTED
    } catch (error) {
        console.log(error);
        throw orderConstants.FAILED;
    }
}

const updateOrderStatus = async (id: string) => {
    try {
        await orderRepo.updateOrderStatus(id);
        return orderConstants.ORDER_STATUS_UPDATED
    } catch (error) {
        throw orderConstants.FAILED
    }
}

const getOneOrder = async (id: string) => {
    try {
        return await orderRepo.getOne(id);
    } catch (error) {
        throw orderConstants.FAILED
    }
}

const assignFurnace = async (productId: string, id: string, furnaceDetails: IFurnace) => {
    try {
        const getadminApproval = await orderRepo.getOne(id)
        console.log(getadminApproval[0].adminApproval);
        if (getadminApproval[0].adminApproval === 'Pending') throw orderConstants.FAILED
        await orderRepo.assignFurnace(productId, id, furnaceDetails);
        return orderConstants.FURNACE_ASSIGNED

    } catch (error) {
        console.log(error);
        throw orderConstants.FAILED
    }
}

const assignStorage = async (productId: string, orderId: string, storage: IStorage) => {
    try {
        await orderRepo.assignStorage(productId, orderId, storage);
        return orderConstants.STORAGE_ASSIGNED;
    } catch (error) {
        console.log(error)
        throw orderConstants.FAILED;
    }
}


const makePayment = async (orderId: string, paidAmount: number) => {
    try {
        const payment = await orderRepo.getAmount(orderId);
        const remainingAmount = payment[0].payment.remainingAmount;
        console.log(payment[0].payment.remainingAmount);
        if (remainingAmount >= 0 && paidAmount <= remainingAmount) {
            await orderRepo.updatePayment(orderId, paidAmount);
            return orderConstants.PAYMENT_DONE
        }

        throw orderConstants.PAYMENT_FAILED

    } catch (error) {
        console.log(error);
        throw orderConstants.FAILED
    }
}

const getRemainingAmount = async (orderId: string) => {
    try {
        return await orderRepo.getAmount(orderId);
    } catch (error) {
        throw orderConstants.FAILED
    }
}

export default {
    createOrder,
    getOrders,
    updateAdminApproval,
    updateOrderStatus,
    getOneOrder,
    assignFurnace,
    assignStorage,
    makePayment,
    getRemainingAmount
}