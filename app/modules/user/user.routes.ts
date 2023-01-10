import { Router } from "express";
import { ResponseHandler } from "../../utility/response-handler";
import userService from "./user.service";

export const userRouter = Router();


userRouter.get('/',async(req,res,next)=>{
    try {
        const response = await userService.getAllUsers();
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
});

userRouter.put('/',async(req,res,next)=>{
    try {
        const { id, ...user } = req.body;
        const response = await userService.updateUser(id, user);
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
})