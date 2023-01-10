import { storageModel } from "./storage.schema";
import { IStorage } from "./storage.type";

const add =(storageDetails:IStorage)=> storageModel.create(storageDetails);
const get=()=>storageModel.find();
const update=(id:String,updatedStorage:any)=> storageModel.updateOne({_id:id},{...updatedStorage});
const deleteOne=(id:String)=>storageModel.updateOne({_id:id},{$set:{isDeleted:true}});
export default {add,get,update,deleteOne}