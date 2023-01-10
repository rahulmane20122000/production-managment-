import { model } from "mongoose";
import { BaseSchema } from "../../utility/base.schema";
import { IHsn } from "./hsn.types";

export const hsnSchema = new BaseSchema({
    hsnCode:{
        type:String,
        required:true
    },
    productDescription:{
        type:String,
        required:true
    },
    cgst:{
        type:Number,
        required:true
    },
    sgst:{
        type:Number,
        required:true
    },
    igst:{
        type:Number,
        required:true
    }
});

type IHsnDocument = Document & IHsn
export const hsnModel = model<IHsnDocument>("hsncodes",hsnSchema);