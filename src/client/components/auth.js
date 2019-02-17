import decode from "jwt-decode";
import axios from "axios";

const storeToken = token => {
    window.localStorage.setItem("userToken", token);
};

const getToken = () => {
    return window.localStorage.getItem("userToken");
};

const isTokenValid = token => {
    if (token < Date.now() / 1000) {
        return true;
    }
    return false;
};

export const login = (data, callback) => {
    axios.post("http://localhost/api/login", data).then(response => {
        storeToken(response.data.token);
        return callback();
    });
};

export const access = () => {
    return decode(getToken()).role;
};

export const logout = () => {
    window.localStorage.removeItem("userToken");
};

export const loggedIn = () => {
    const token = getToken();

    return !!token && !isTokenValid(token);
};
