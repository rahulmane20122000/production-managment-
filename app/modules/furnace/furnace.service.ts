import { furnaceConstants } from "./furnace.constants"
import furnaceRepo from "./furnace.repo"
import { IFurnace } from "./furnace.types";

const getAllFurnace = async()=>{
    try {
        return await furnaceRepo.get();
    } catch (error) {
        throw furnaceConstants.CANNOT_GET_FURNACE
    }
}

const createFurnace = async(furnaceDetails:IFurnace)=>{
    try {
        await furnaceRepo.add(furnaceDetails);
        return furnaceConstants.FURNACE_CREATED;
    } catch (error) {
        throw furnaceConstants.CANNOT_CREATE_FURNACE
    }
}

const updateFurnace=async(id:string,updatedFurnaceDetails:any)=>{
    try {
        await furnaceRepo.update(id,updatedFurnaceDetails);
        return furnaceConstants.FURNACE_UPDATED
    } catch (error) {
        throw furnaceConstants.CANNOT_UPDATE_FURNACE
    }
}

const deleteFurnace=async(id:string)=>{
    try {
        await furnaceRepo.deleteOne(id);
        return furnaceConstants.FURNACE_DELETED
    } catch (error) {
        throw furnaceConstants.CANNOT_DELETE_FURNACE
    }
}


export default{getAllFurnace,createFurnace,deleteFurnace,updateFurnace}