import { unitModel } from "./unit.schema";
import { Iunit } from "./unit.types";

const add = (unitDetails:Iunit)=>unitModel.create(unitDetails);

const get = ()=> unitModel.find({isDeleted:false});

const update = (id:string,updatedUnitDetails:any)=> unitModel.updateOne({_id:id},{$set:{...updatedUnitDetails}});

const deleteOne=(id:string)=> unitModel.updateOne({_id:id},{$set:{isDeleted:true}});

export default {add,get,update,deleteOne};