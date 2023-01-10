import { storageConstants } from "./storage.constants";
import storageRepo from "./storage.repo";
import { IStorage } from "./storage.type";

const createStorage=async(storageDetails:IStorage)=>{
    try {
        await storageRepo.add(storageDetails);
        return storageConstants.STORAGE_CREATED
    } catch (error) {
        throw storageConstants.COULD_NOT_CREATE
    }
}

const getAllStorage=async()=>{
    try {
        return await storageRepo.get();
    } catch (error) {
        throw storageConstants.COULD_NOT_GET
    }
}

const updateStorage = async(id:String,updatedStorage:any)=>{
  try {
    await storageRepo.update(id,updatedStorage)
    return storageConstants.STORAGE_UPDATED
  } catch (error) {
    throw storageConstants.COULD_NOT_UPDATE;
  }
}

const deleteStorage = async(id:string)=>{
    try {
        await storageRepo.deleteOne(id);
        return storageConstants.STORAGE_DELETED
    } catch (error) {
        throw storageConstants.COULD_NOT_DELETE
    }
}

export default {createStorage,getAllStorage,updateStorage,deleteStorage}