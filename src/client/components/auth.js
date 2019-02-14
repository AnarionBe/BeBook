import decode from "jwt-decode";
import axios from "axios";

const storeToken = token => {
    window.localStorage.setItem("userToken", token);
};

const storeUser = user => {
    window.localStorage.setItem("user", user);
};

const getToken = () => {
    return window.localStorage.getItem("userToken");
};

const getUser = () => {
    return window.localStorage.getItem("user");
};

export const login = (data, callback) => {
    axios.post("http://localhost/api/login", data).then(response => {
        storeToken(response.data.token);
        storeUser(response.data.user);
        return callback();
    });
};

export const access = () => {
    return getUser().role;
};
