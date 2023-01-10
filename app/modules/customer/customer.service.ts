import { customerConstants } from "./customer.constants";
import customerRepo from "./customer.repo";
import { ICustomer } from "./customer.types";

const createCustomer = async (customerDetails: ICustomer) => {
  try {
    await customerRepo.add(customerDetails);
    return customerConstants.CUSTOMER_CREATED
  } catch (error) {
    throw customerConstants.FAILED_TO_CREATE;
  }
}

const getAllCustomer = async () => {
  try {
    return await customerRepo.get();
  } catch (error) {
    throw customerConstants.FAILED_TO_GET;
  }
}

const updateCustomer = async (id: string, updatedCustomerDetails: any) => {
  try {
    await customerRepo.update(id, updatedCustomerDetails);
    return customerConstants.CUSTOMER_UPDATED;
  } catch (error) {
    throw customerConstants.FAILED_TO_UPDATE;
  }
}

const deleteCustomer = async (id: string) => {
  try {
    await customerRepo.deleteOne(id);
    return customerConstants.CUSTOMER_DELETED
  } catch (error) {
    throw customerConstants.FAILED_TO_DELETE
  }
}


export default { createCustomer, getAllCustomer, updateCustomer, deleteCustomer }