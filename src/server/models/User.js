import mongoose from "mongoose";

mongoose
    .connect("mongodb://dev:dev@mongo:27017/bebook?authSource=admin")
    .then(() =>
        console.log("Connection to MongoDB has been successfully established."),
    )
    .catch(err => console.log(err));

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
            enum: ["coach", "junior"],
            default: "junior",
        },
        date: {
            type: Date,
            default: Date.now,
        },
        booksBorrowed: {
            type: Array,
            default: null,
        },
    },
    {collection: "User"},
);

export default mongoose.model("User", UserSchema);

// -----------------------------
const addOne = () => (val, callback) => {
    val = val + 1;
    callback();
}