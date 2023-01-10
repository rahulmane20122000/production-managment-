import { IFurnace } from "../furnace/furnace.types";
import { IHsn } from "../hsn/hsn.types";
import { IMaterial } from "../material/material.types";
import { IStorage } from "../storage/storage.type";

export interface IProduct{
    productName:string;
    material:IMaterial;
    quantity:number;
    productStatus:string;
    unit:string;
    rate:number;
    totalAmount:number;
    furnace:IFurnace;
    storage:IStorage;
    hsn:IHsn;
}