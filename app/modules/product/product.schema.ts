import { BaseSchema } from "../../utility/base.schema";
import { furnaceSchema } from "../furnace/furnace.schema";
import { hsnSchema } from "../hsn/hsn.schema";
import { materialSchema } from "../material/material.schema";
import { storageSchema } from "../storage/storage.schema";


export const productSchema = new BaseSchema({
    productName:{
        type:String,
        required:true
    },
    material:{
        type :materialSchema,
        required:true
    },
    quantity:{
        type:String,
        required:true
    },
    unit:{
        type:String,
        required:true
    },
    rate:{
        type:Number,
        required:true
    },
    totalAmount:{
        type:Number,
        default:0
    },
    productStatus:{
        enum:['Pending','Production','Complete','Closed'],
        type:String,
        default:'Pending'
    },
    furnace:{
        type:furnaceSchema,
        default:null
    },
    storage:{
        type:storageSchema,
        default:null
    },
    hsn:{
        type:hsnSchema,
        required:true
    }
})