import { Router,Request,Response,NextFunction } from "express";
import { permit } from "../../utility/authorize";
import { ResponseHandler } from "../../utility/response-handler";
import { ROLES } from "../roles/roles.constants";
import customerService from "./customer.service";
import userService from "./customer.service";
import { customerValidator } from "./customer.validators";

export const customerRouter = Router();


customerRouter.post("/",permit([ROLES.ADMIN]),customerValidator,async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const response = await customerService.createCustomer(req.body);
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
});

customerRouter.get("/",permit([ROLES.ADMIN]),async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const response = await userService.getAllCustomer();
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
});

customerRouter.put("/delete/:id",permit([ROLES.ADMIN]),async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const response = await userService.deleteCustomer(req.params.id);
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
});

customerRouter.put("/:id",permit([ROLES.ADMIN]),async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const response = await userService.updateCustomer(req.params.id,req.body);
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
});