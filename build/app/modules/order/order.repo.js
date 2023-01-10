"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const order_schema_1 = require("./order.schema");
const add = (orderDetails) => order_schema_1.orderModel.create(orderDetails);
const get = (name, page) => page ? order_schema_1.orderModel.find({ 'customer.name': new RegExp(name || '', 'i') }, { isDeleted: false }).limit(2).skip((page - 1) * 2) : order_schema_1.orderModel.find({ 'customer.name': new RegExp(name || '', 'i') });
const updateAdminApproval = (id, status) => order_schema_1.orderModel.updateOne({ _id: id }, { $set: { adminApproval: status.adminApproval } });
const updateOrderStatus = (id) => order_schema_1.orderModel.updateOne({ _id: id }, { $set: { orderStatus: 'Complete' } });
const getOne = (id) => order_schema_1.orderModel.find({ _id: id });
const assignFurnace = (productId, id, furnaceDetails) => order_schema_1.orderModel.updateOne({ _id: id, 'invoice.products._id': productId }, { $set: { 'invoice.products.$.furnace': Object.assign({}, furnaceDetails), 'invoice.products.$.productStatus': 'Production' } });
const assignStorage = (productId, orderId, storage) => order_schema_1.orderModel.updateOne({ _id: orderId, 'invoice.products._id': productId }, { $set: { 'invoice.products.$.storage': Object.assign({}, storage), 'invoice.products.$.productStatus': 'Complete' } });
const updatePayment = (orderId, paidAmount) => order_schema_1.orderModel.updateOne({ _id: orderId }, { $inc: { 'payment.remainingAmount': -paidAmount } });
const getAmount = (orderId) => order_schema_1.orderModel.find({ _id: orderId }).select('payment');
exports.default = { add, get, updateAdminApproval, updateOrderStatus, getOne, assignFurnace, assignStorage, updatePayment, getAmount };
//# sourceMappingURL=order.repo.js.map