import { MessageHandler } from "../../utility/response-handler";

export const authConstants = {
    LOGIN: new MessageHandler(200, 'User Logged In!!!'),
    LOGOUT: new MessageHandler(200, 'User Logout!!!'),
    INVALID_DETAILS: new MessageHandler(401, 'Invalid Credentials!!!'),
    PASSWORD_UPDATED: new MessageHandler(200, 'Password Updated!!!'),
    INVALID_PASSWORD: new MessageHandler(401, 'Please Enter a Valid password!!!'),
    INVALID_EMAIL: new MessageHandler(401, 'Please Enter a Valid MailId!!!'),
    PASSWORD_LINK: new MessageHandler(200, 'Password Link Has Been Sent To Registered Mail !!!'),
    FAILED:new MessageHandler(400,"Failed To Process Request!!!"),
    USER_CREATED: new MessageHandler(200,"user created!!!")
}