import { IFurnace } from "../furnace/furnace.types";
import { IStorage } from "../storage/storage.type";
import { orderModel } from "./order.schema";
import { IOrder } from "./order.types";

const add = (orderDetails: IOrder) => orderModel.create(orderDetails);

const get = ( page?: number) => page ? orderModel.find({isDeleted:false}).limit(page).skip((page - 1) * 2) : orderModel.find({isDeleted:false});

const updateAdminApproval = (id: String, status: any) => orderModel.updateOne({ _id: id }, { $set: { adminApproval: status.adminApproval } });

const updateOrderStatus = (id: string) => orderModel.updateOne({ _id: id }, { $set: { orderStatus: 'Complete' } });

const getOne = (id: string) => orderModel.find({ _id: id });

const assignFurnace = (productId: string, id: string, furnaceDetails: IFurnace) => orderModel.updateOne({ _id: id, 'invoice.products._id': productId }, { $set: { 'invoice.products.$.furnace': { ...furnaceDetails }, 'invoice.products.$.productStatus': 'Production' } })

const assignStorage = (productId: string, orderId: string, storage: IStorage) => orderModel.updateOne({ _id: orderId, 'invoice.products._id': productId }, { $set: { 'invoice.products.$.storage': { ...storage }, 'invoice.products.$.productStatus': 'Complete' } })

const updatePayment = (orderId: string, paidAmount: number) => orderModel.updateOne({ _id: orderId }, { $inc: { 'payment.remainingAmount':- paidAmount }})

const getAmount = (orderId:string) => orderModel.find({_id:orderId}).select('payment');
export default { add, get, updateAdminApproval, updateOrderStatus, getOne, assignFurnace, assignStorage, updatePayment,getAmount }