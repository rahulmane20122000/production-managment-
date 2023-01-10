import { furnaceModel } from "./furnace.schema";
import { IFurnace } from "./furnace.types";

const get =()=> furnaceModel.find({isDeleted:false});
const add = (furnaceDetails:IFurnace)=> furnaceModel.create(furnaceDetails);
const deleteOne=(id:string)=> furnaceModel.updateOne({_id:id},{$set:{isDeleted:true}});
const update=(id:string,updatedFurnaceDetails:any)=>furnaceModel.updateOne({_id:id},{$set:{...updatedFurnaceDetails}});

export default {get,add,deleteOne,update}