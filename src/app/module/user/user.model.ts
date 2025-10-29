import mongoose, { Schema } from "mongoose";
import { IUser } from "./user.interfae";

const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: 6,
        select: false,
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
    },
    image: {
        type: String,
        default: "https://i.ibb.co/2d3Y1kF/default-user.png",
    }
},
    { timestamps: true }
)

const User = mongoose.model<IUser>("User", userSchema);
export default User;