import { customerModel } from "./customer.schema";
import { ICustomer } from "./customer.types";

const add = (userCustomer: ICustomer) => customerModel.create(userCustomer);
const get = () => customerModel.find({isDeleted:false});
const update = (id: string, updatedCustomerDetails: any) => customerModel.updateOne({ _id: id }, { $set: { ...updatedCustomerDetails } });
const deleteOne = (id: string) => customerModel.updateOne({ _id: id }, { $set: { isDeleted: true } });

export default { add, get, update, deleteOne };

