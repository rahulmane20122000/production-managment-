import { createToken } from "../../utility/authorize";
import { sendEmail } from "../../utility/email";
import { createHash } from "../../utility/password";
import rolesService from "../roles/roles.service";
import userService from "../user/user.service";
import { IUser } from "../user/user.types";
import { authConstants } from "./auth.constants";
import { ILogin } from "./auth.types";

const login = async (loginCredentials: ILogin) => {
    try {
        const user = await userService.getUser(loginCredentials);
        if (user) {
            const role = await rolesService.getRole(user.role);
            const token = createToken({ id: user._id, name: user.name, role: user.role });
            return { role: role?.name, token: token };
        }
        throw authConstants.INVALID_DETAILS
    } catch (error) {
        throw error
        // throw authConstants.FAILED;

    }

}

const createUser = async (userDetails: IUser) => {
    try {
        const hashedPassword = await createHash(userDetails.password);
        const normalPassword = userDetails.password
        userDetails.password = hashedPassword;
        const response = await userService.createUser(userDetails);
        await sendEmail(userDetails.email, "ACCOUNT CREATED", `
            Hi, ${userDetails.name},
            Login Details,
            username:- ${userDetails.username},
            password:- ${normalPassword}
        `)
        return authConstants.USER_CREATED;
    } catch (error) {
        throw error
        // throw authConstants.FAILED;
    }
}

const resetPassword = async (userId: string, newPassword: string, oldPassword?: string) => {
    try {
        newPassword = await createHash(newPassword);
        await userService.updatePassword(userId, newPassword, oldPassword);
        return authConstants.PASSWORD_UPDATED;
    } catch (error) {
        throw authConstants.INVALID_PASSWORD;
    }

}

const forgotPassword = async (email: string) => {
    try {
        const userDetails = await userService.getUserByMail(email);
        const token = createToken(userDetails._id.toString());
        const { URL } = process.env;
        const link = `${URL}/${token}`;
        await sendEmail(userDetails.email, "FORGOT PASSWORD", `
        Hi, ${userDetails.name},
        Your password reset link is here ${link}
    `)
        return authConstants.PASSWORD_LINK;
    } catch (error) {
      console.log(error);
        throw authConstants.INVALID_EMAIL;
    }
}

export default {
    login,
    createUser,
    resetPassword,
    forgotPassword
}