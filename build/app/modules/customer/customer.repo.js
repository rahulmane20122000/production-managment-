"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const customer_schema_1 = require("./customer.schema");
const add = (userCustomer) => customer_schema_1.customerModel.create(userCustomer);
const get = () => customer_schema_1.customerModel.find({ isDeleted: false });
const update = (id, updatedCustomerDetails) => customer_schema_1.customerModel.updateOne({ _id: id }, { $set: Object.assign({}, updatedCustomerDetails) });
const deleteOne = (id) => customer_schema_1.customerModel.updateOne({ _id: id }, { $set: { isDeleted: true } });
exports.default = { add, get, update, deleteOne };
//# sourceMappingURL=customer.repo.js.map