import decode from "jwt-decode";
import axios from "axios";

const storeToken = token => {
    window.localStorage.setItem("userToken", token);
};

const getToken = () => {
    return window.localStorage.getItem("userToken");
};

export const login = (data, callback) => {
    axios.post("http://localhost/api/login", data).then(response => {
        storeToken(response.data.token);
        return callback();
    });
};

export const access = () => {
    return decode(getToken());
};

export const logout = () => {
    window.localStorage.removeItem("userToken");
};
