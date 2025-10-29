import { Request, Response } from "express";
import { UserServices } from "./user.service";


const registerUser = async (req : Request, res : Response) => {
  try {
    const userData = req.body;
    const result = await UserServices.createUserIntoDB(userData);
    return res.status(201).json({
      success: true,
      message: "User registered successfully!",
      data: result,
    });
  } catch (error : any) {
    console.error("Error registering user:", error.message);
    return res.status(500).json({
      success: false,
      message: "Failed to register user",
      error: error.message,
    });
  }
};

export const UserControllers = {
    registerUser,
}
