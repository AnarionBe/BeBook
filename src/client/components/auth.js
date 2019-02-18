import decode from "jwt-decode";
import axios from "axios";

const storeToken = token => {
    window.localStorage.setItem("userToken", token);
};

const getToken = () => {
    const token = window.localStorage.getItem("userToken");

    if (token) {
        return token;
    }
    return false;
};

const isTokenValid = token => {
    if (token < Date.now() / 1000) {
        return true;
    }
    return false;
};

export const login = (data, callback) => {
    axios.post("/api/login", data).then(response => {
        storeToken(response.data.token);
        callback();
    });
};

export const access = () => {
    return decode(getToken()).role;
};

// TODO: create button to trigger
export const logout = () => {
    window.localStorage.removeItem("userToken");
};

export const loggedIn = () => {
    const token = getToken();

    if (token) {
        return !!token && !isTokenValid(token);
    }
    return false;
};
