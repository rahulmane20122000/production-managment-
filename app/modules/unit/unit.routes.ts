import { NextFunction, Request, Response, Router } from "express";
import { ResponseHandler } from "../../utility/response-handler";
import unitService from "./unit.service";
import { UnitsValidator } from "./unit.validator";


export const unitsRouter = Router();



unitsRouter.get("/",async(req,res,next)=>{
  try {
    const response = await unitService.getUnits();
    res.send(new ResponseHandler(response));
  } catch (error) {
     next(error);
  }
});

unitsRouter.post("/",UnitsValidator,async(req:Request,res:Response,next:NextFunction)=>{
  try {
    const response =await unitService.addUnit(req.body);
    res.send(new ResponseHandler(response));
  } catch (error) {
     next(error);
  }
});

unitsRouter.put("/delete-unit/:id",async(req,res,next)=>{
  try {
    const response = await unitService.deleteUnit(req.params.id);
    res.send(new ResponseHandler(response));
  } catch (error) {
     next(error);
  }
});

unitsRouter.put("/:id",async(req,res,next)=>{
  try {
    const response = await unitService.updateUnit(req.params.id,req.body);
    res.send(new ResponseHandler(response));
  } catch (error) {
     next(error);
  }
});

