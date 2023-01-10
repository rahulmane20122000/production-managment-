import { model } from "mongoose";
import { BaseSchema } from "../../utility/base.schema";
import { IStorage } from "./storage.type";

export const storageSchema = new BaseSchema({
    building:{
        type:String,
    },
    shelf:{
        type:String,
    },
    row:{
        type:String,
    },
    rack:{
        type:String,
    }
}); 

type IStorageDocument = Document & IStorage;

export const storageModel = model<IStorageDocument>('Storage',storageSchema);