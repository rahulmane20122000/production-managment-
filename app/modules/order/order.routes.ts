import { Router,Request,Response,NextFunction } from "express";
import { permit } from "../../utility/authorize";
import { ResponseHandler } from "../../utility/response-handler";
import { ROLES } from "../roles/roles.constants";
import orderService from "./order.service";

export const orderRouter = Router();

orderRouter.post('/',permit([ROLES.CLERK]),async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const response = await orderService.createOrder(req.body);
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
});

orderRouter.get("/",permit([ROLES.CLERK,ROLES.ADMIN]),async(req:Request,res:Response,next:NextFunction)=>{
  try {
      const response = await orderService.getOrders(Number(req.query.page));
      res.send(new ResponseHandler(response));
  } catch (error) {
    next(error);
  }
});

orderRouter.put("/assign-furnace",permit([ROLES.ADMIN]),async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const {productId,orderId,furnaceDetails} = req.body;
        const response = await orderService.assignFurnace(productId,orderId,furnaceDetails)
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
});

orderRouter.put("/assign-storage",permit([ROLES.ADMIN]),async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const {productId,orderId,storage} = req.body;
        const response = await orderService.assignStorage(productId,orderId,storage);
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error)
    }
});

orderRouter.get('/remaining-payment/:orderId',permit([ROLES.ACCOUNTANT]),async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const response = await orderService.getRemainingAmount(req.params.orderId);
        res.send(new ResponseHandler({remainingAmount : response[0].payment.remainingAmount}));
    } catch (error) {
        next(error);
    }
})


orderRouter.put('/make-payment/:orderId',permit([ROLES.ACCOUNTANT]),async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const {paidAmount} = req.body
        const response = await orderService.makePayment(req.params.orderId,paidAmount);
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
})


orderRouter.put("/admin-approve/:id",permit([ROLES.ADMIN]),async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const response = await orderService.updateAdminApproval(req.params.id,req.body);
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
});

orderRouter.get('/:id',permit([ROLES.CLERK,ROLES.ADMIN]),async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const response = await orderService.getOneOrder(req.params.id);
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
})

orderRouter.put("/:id",permit([ROLES.ADMIN]),async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const response = await orderService.updateOrderStatus(req.params.id);
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
});