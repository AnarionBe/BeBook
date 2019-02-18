import decode from "jwt-decode";
import axios from "axios";

const storeToken = token => {
    window.localStorage.setItem("userToken", token);
};

const getToken = () => {
    const token = window.localStorage.getItem("userToken");

    return token ? token : false;
};

const isTokenValid = token => {
    return token < Date.now() / 1000;
};

export const login = (data, callback) => {
    axios.post("http://localhost/api/login", data).then(response => {
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
