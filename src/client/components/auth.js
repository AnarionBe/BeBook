// import decode from "jwt-decode";
import axios from "axios";

export const login = (data, callback) => {
    axios.post("http://localhost/api/login", data).then(response => {
        return callback(response);
    });
};
