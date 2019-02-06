import mongoose, {Schema} from "mongoose";

mongoose.connect("mongodb://dev:dev@mongo:27017/bebook?authSource=admin");

const schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    // TODO: array of books
    // borrowedBooks: {
    //     type: Array,
    //     default: null,
    // },
});

module.exports = mongoose.model("user", schema);
