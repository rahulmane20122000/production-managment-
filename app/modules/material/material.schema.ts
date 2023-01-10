import { model } from "mongoose";
import { BaseSchema } from "../../utility/base.schema";
import { unitSchema } from "../unit/unit.schema";
import { IMaterial } from "./material.types";

export const materialSchema = new BaseSchema({
    materialName:{
        type:String,
        required:true
    },
});

type IMaterialDocument = Document & IMaterial;

export const materialModel = model<IMaterialDocument>("material",materialSchema);

