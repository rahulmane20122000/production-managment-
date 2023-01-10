import roleSchema from "./roles.schema";

const getRole=async(role:string)=>{
   try {
    return await roleSchema.getById(role);
   } catch (error) {
      throw "Failed";
   }
}

export default {
    getRole
}