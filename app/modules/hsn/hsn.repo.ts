import { hsnModel } from "./hsn.schema";
import { IHsn } from "./hsn.types";

const get =()=> hsnModel.find({isDeleted:false});
const add = (hsnDetails:IHsn)=> hsnModel.create(hsnDetails);
const deleteOne=(id:string)=> hsnModel.updateOne({_id:id},{$set:{isDeleted:true}});
const update=(id:string,updatedHsnDetails:any)=>hsnModel.updateOne({_id:id},{$set:{...updatedHsnDetails}});

export default {get,add,deleteOne,update}