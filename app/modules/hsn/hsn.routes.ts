import { Router,Request,Response,NextFunction } from "express";
import { permit } from "../../utility/authorize";
import { ResponseHandler } from "../../utility/response-handler";
import { ROLES } from "../roles/roles.constants";
import hsnService from "./hsn.service";
import { hsnValidator } from "./hsn.validators";

export const hsnRouter = Router();

hsnRouter.get('/',permit([ROLES.ADMIN]),async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const response = await hsnService.getAllHsn();
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
});

hsnRouter.post('/',permit([ROLES.ADMIN]),hsnValidator,async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const response = await hsnService.createHsn(req.body);
        res.send(new ResponseHandler(response))
    } catch (error) {
        next(error);
    }
});


hsnRouter.put('/updateHsn/:id',permit([ROLES.ADMIN]),async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const response = await hsnService.updateHsn(req.params.id,req.body);
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
})

hsnRouter.put('/:id',permit([ROLES.ADMIN]),async(req:Request,res:Response,next:NextFunction)=>{
  try {
    const response = await hsnService.deleteHsn(req.params.id);
    res.send(new ResponseHandler(response));
  } catch (error) {
    next(error);
  }
});