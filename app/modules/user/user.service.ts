import userRepo from "./user.repo";
import { userConstants } from "./user.constants";
import { comparePassword } from "../../utility/password";
import { IUser } from "./user.types";
import { ILogin } from "../auth/auth.types";
import { authConstants } from "../auth/auth.constants";

const getAllUsers = async () => {
    try {
        return await userRepo.getAll();

    } catch (error) {
        throw userConstants.NOT_FOUND
    }
}

const getUser = async (credentials: ILogin) => {
    try {
        const user = await userRepo.getByField({ username: credentials.username });
        const isMatched = await comparePassword(credentials.password, user?.password || '');
        console.log(isMatched);
        if (user && isMatched) return user;
        throw userConstants.NOT_FOUND;
    } catch (error) {
       
        throw userConstants.NOT_FOUND;
    }
}

const getUserByMail = async (email: string) => {
    try {
        const user = await userRepo.getByField({ email });
    if (user) return user;
    throw userConstants.NOT_FOUND;
    } catch (error) {
        throw userConstants.NOT_FOUND;  
    }
}

const createUser = async (userDetails: IUser) => {
    try {
        await userRepo.create(userDetails);
        return userConstants.USER_ADDED;
    } catch (error) {
        throw userConstants.UNIQUE_EMAIL;
    }
};

const updateUser = async (id: string, updatedUserDetails: IUser) => {
    try {
        await userRepo.update(id, updatedUserDetails);
        return userConstants.USER_UPDATED;
    } catch (error) {
        throw userConstants.NOT_FOUND;
    }

};

const deleteUser = async (id: string) => {
    try {
        await userRepo.deleteOne(id);
        return userConstants.USER_DELETED;
    } catch (error) {
        throw userConstants.NOT_FOUND;
    }

}

const updatePassword = async (id: string, newPassword: string, oldPassword?: string) => {
    try {
        const user = await userRepo.getByField({ id });
        let isMatched = true;
        if (oldPassword) isMatched = await comparePassword(oldPassword, user?.password || '');
        if (isMatched && user) {
        user.password = newPassword;
        user.save();
        return userConstants.PASSWORD_CHANGED;
    }
    } catch (error) {
        throw userConstants.NOT_FOUND;
    }
}


export default {
    getAllUsers,
    getUser,
    getUserByMail,
    createUser,
    deleteUser,
    updateUser,
    updatePassword
}