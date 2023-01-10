import { NextFunction, Request, Response, Router } from "express";
import { ResponseHandler } from "../../utility/response-handler";
import storageService from "./storage.service";
import { StorageValidator } from "./storage.validator";

export const storageRouter = Router();

storageRouter.post("/",StorageValidator,async(req:Request,res:Response,next:NextFunction)=>{
  try {
    const response = await storageService.createStorage(req.body);
    res.send(new ResponseHandler(response));
  } catch (error) {
    next(error);
  }
});

storageRouter.get("/",async(req,res,next)=>{
  try {
    const response = await storageService.getAllStorage();
    res.send(new ResponseHandler(response)); 
  } catch (error) {
    next(error);
  }
});

storageRouter.put("/updateStorage/:id",async(req,res,next)=>{
  try {
    const response = await storageService.updateStorage(req.params.id,req.body);
    res.send(new ResponseHandler(response)); 
  } catch (error) {
    next(error);
  }
});

storageRouter.put("/:id",async(req,res,next)=>{
  try {
    const response = await storageService.deleteStorage(req.params.id);
    res.send(new ResponseHandler(response)); 
  } catch (error) {
    next(error);
  }
});