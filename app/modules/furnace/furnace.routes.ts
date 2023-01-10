import { NextFunction, Request, Response, Router } from "express";
import { permit } from "../../utility/authorize";
import { ResponseHandler } from "../../utility/response-handler";
import { ROLES } from "../roles/roles.constants";
import furnaceService from "./furnace.service";
import { FurnaceValidator } from "./furnace.validator";


export const furnaceRouter = Router();

furnaceRouter.get('/',permit([ROLES.ADMIN]),async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const response = await furnaceService.getAllFurnace();
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
});

furnaceRouter.post('/',permit([ROLES.ADMIN]),FurnaceValidator,async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const response = await furnaceService.createFurnace(req.body);
        res.send(new ResponseHandler(response))
    } catch (error) {
        next(error);
    }
});


furnaceRouter.put('/updateFurnace/:id',permit([ROLES.ADMIN]),async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const response = await furnaceService.updateFurnace(req.params.id,req.body);
        res.send(response);
    } catch (error) {
        next(error);
    }
})

furnaceRouter.put('/:id',permit([ROLES.ADMIN]),async(req:Request,res:Response,next:NextFunction)=>{
  try {
    const response = await furnaceService.deleteFurnace(req.params.id);
    res.send(new ResponseHandler(response));
  } catch (error) {
    next(error);
  }
});