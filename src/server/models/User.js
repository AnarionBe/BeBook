import mongoose from "mongoose";

const schema = new mongoose.Schema(
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
            enum: ["coach", "junior"],
            default: "junior",
        },
        date: {
            type: Date,
            default: Date.now(),
        },
        booksBorrowed: {
            type: Array,
            default: null,
        },
    },
    {collection: "User"},
);

export default mongoose.model("User", schema);
