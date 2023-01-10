import { hsnConstants } from "./hsn.constants";
import hsnRepo from "./hsn.repo";
import { IHsn } from "./hsn.types";

const getAllHsn = async()=>{
    try {
        return await hsnRepo.get();
    } catch (error) {
        throw hsnConstants.CANNOT_GET_HSN
    }
}

const createHsn = async(hsnDetails:IHsn)=>{
    try {
        await hsnRepo.add(hsnDetails);
        return hsnConstants.HSN_CREATED;
    } catch (error) {
        throw hsnConstants.CANNOT_CREATE_HSN
    }
}

const updateHsn=async(id:string,updatedHsnDetails:any)=>{
    try {
        await hsnRepo.update(id,updatedHsnDetails);
        return hsnConstants.HSN_UPDATED
    } catch (error) {
        throw hsnConstants.CANNOT_UPDATE_HSN
    }
}

const deleteHsn=async(id:string)=>{
    try {
        await hsnRepo.deleteOne(id);
        return hsnConstants.HSN_DELETED
    } catch (error) {
        throw hsnConstants.CANNOT_DELETE_HSN
    }
}


export default{getAllHsn,createHsn,deleteHsn,updateHsn}