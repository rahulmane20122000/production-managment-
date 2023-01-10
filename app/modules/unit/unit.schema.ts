import { model } from "mongoose";
import { BaseSchema } from "../../utility/base.schema";
import { Iunit } from "./unit.types";

export const unitSchema = new BaseSchema({
    unit:{
        type:String,
         required:true
    },
    rate:{
        type:Number,
        required:true
    }
});

type IUnitDocument = Document & Iunit;

export const unitModel = model<IUnitDocument>("units",unitSchema);

