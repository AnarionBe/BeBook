import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            trim: true,
        },
        lastName: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
        },
        avatar: {
            type: String,
        },
        role: {
            type: String,
            enum: ["coach", "student"],
            default: "student",
        },
        date: {
            type: Date,
            default: Date.now,
        },
    },
    {collection: "User"},
);

export default mongoose.model("User", UserSchema);
