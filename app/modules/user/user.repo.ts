import { userModel } from "./user.schema";
import { IUser } from "./user.types";

const getByField = (field: any) => userModel.findOne({ ...field, isDeleted: false });
const getAll = ()=> userModel.find();
const create = (user: IUser) => userModel.create({ ...user });
const update = (id: string, user: IUser) => userModel.updateOne({ _id: id, isDeleted: false }, { $set: { ...user } });
const deleteOne = (id: string) => userModel.updateOne({ _id: id, isDeleted: false }, { $set: { isDeleted: true } });

export default {
    getAll,
    getByField,
    create,
    update,
    deleteOne
}