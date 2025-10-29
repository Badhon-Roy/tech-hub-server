import { IUser } from "./user.interfae";
import User from "./user.model";

const createUserIntoDB = async (user : IUser)=>{
    const result = await User.create(user)
    return result;
}

export const UserServices ={
    createUserIntoDB
}