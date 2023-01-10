import { Router,Request,Response,NextFunction } from "express";
import { permit } from "../../utility/authorize";
import { ResponseHandler } from "../../utility/response-handler";
import { ROLES } from "../roles/roles.constants";
import materialService from "./material.service";
import { materialValidator } from "./material.validator";

export const materialRouter = Router();

materialRouter.get('/',permit([ROLES.ADMIN]),async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const response = await materialService.getMaterial();
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
});

materialRouter.post('/',permit([ROLES.ADMIN]),materialValidator,async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const response = await materialService.addMaterial(req.body);
        res.send(new ResponseHandler(response))
    } catch (error) {
        next(error);
    }
});


materialRouter.put('/update/:id',permit([ROLES.ADMIN]),async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const response = await materialService.updateMaterial(req.params.id,req.body);
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
})

materialRouter.put('/:id',permit([ROLES.ADMIN]),async(req:Request,res:Response,next:NextFunction)=>{
  try {
    const response = await materialService.deleteMaterial(req.params.id);
    res.send(new ResponseHandler(response));
  } catch (error) {
    next(error);
  }
});