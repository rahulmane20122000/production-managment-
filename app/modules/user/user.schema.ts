import { model } from "mongoose";
import { BaseSchema } from "../../utility/base.schema";
import { IUser } from "./user.types";

export const userSchema = new BaseSchema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

type IUserDocument = Document & IUser;

export const userModel = model<IUserDocument>('user',userSchema);