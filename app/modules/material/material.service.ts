import { materialConstants } from "./material.constants";
import materialRepo from "./material.repo";
import { IMaterial } from "./material.types";

const addMaterial=async(materialDetails:IMaterial)=>{
    try {
        await materialRepo.add(materialDetails);
        return materialConstants.MATERIAL_CREATED
    } catch (error) {
        throw materialConstants.MATERIAL_NOT_CREATED
    }
}


const getMaterial = async()=>{
    try {
        return await materialRepo.get();
    } catch (error) {
        throw materialConstants.COULD_NOT_GET
    }
}


const updateMaterial=async(id:string,updatedMaterial:any)=>{
    try {
        await materialRepo.update(id,updatedMaterial);
        return materialConstants.MATERIAL_UPDATED
    } catch (error) {
        throw materialConstants.MATERIAL_NOT_UPDATED
    }
}

const deleteMaterial = async(id:string)=>{
try {
    await materialRepo.deleteOne(id);
    return materialConstants.MATERIAL_DELETED
} catch (error) {
    throw materialConstants.MATERIAL_NOT_DELETED
}
}

export default {addMaterial,getMaterial,updateMaterial,deleteMaterial}