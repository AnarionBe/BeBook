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

let UsersModel = mongoose.model("User", UserSchema);

UsersModel.getAll = () => {
    return UsersModel.find({});
};

UsersModel.addUser = userToAdd => {
    return userToAdd.save();
};

UsersModel.removeUser = userEmail => {
    return UsersModel.remove({email: userEmail});
};

export default UsersModel;
