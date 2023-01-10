import { unitConstants } from "./unit.constants";
import unitRepo from "./unit.repo";
import { Iunit } from "./unit.types";

const addUnit=async(unitDetails:Iunit)=>{
    try {
        await unitRepo.add(unitDetails);
        return unitConstants.UNITS_CREATED
    } catch (error) {
        throw unitConstants.UNITS_NOT_CREATED
    }
}


const getUnits = async()=>{
    try {
        return await unitRepo.get();
    } catch (error) {
        throw unitConstants.CANT_GET
    }
}


const updateUnit=async(id:string,updatedUnits:any)=>{
    try {
        await unitRepo.update(id,updatedUnits);
        return unitConstants.UNITS_UPDATED
    } catch (error) {
        throw unitConstants.CANT_UPDATE
    }
}

const deleteUnit = async(id:string)=>{
try {
    await unitRepo.deleteOne(id);
    return unitConstants.UNITS_DELETED
} catch (error) {
    throw unitConstants.CANT_DELETE
}
}

export default {addUnit,getUnits,updateUnit,deleteUnit}