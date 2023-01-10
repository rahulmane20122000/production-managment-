import { model } from "mongoose";
import { BaseSchema } from "../../utility/base.schema";
import { IFurnace } from "./furnace.types";

export const furnaceSchema = new BaseSchema({
    furnaceName:{
        type:String,
        
    },
    isOccupied:{
        type:Boolean,
        default:false
    }
});

type IFurnaceDocument = Document & IFurnace

export const furnaceModel = model<IFurnaceDocument>('furnace',furnaceSchema);
