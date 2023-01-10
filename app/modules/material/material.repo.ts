import { materialModel } from "./material.schema";
import { IMaterial } from "./material.types";

const add = (materialDetails:IMaterial)=>materialModel.create(materialDetails);

const get = ()=> materialModel.find({isDeleted:false});

const update = (id:string,updatedMaterialDetails:any)=> materialModel.updateOne({_id:id},{$set:{...updatedMaterialDetails}});

const deleteOne=(id:string)=> materialModel.updateOne({_id:id},{$set:{isDeleted:true}});

export default {add,get,update,deleteOne};