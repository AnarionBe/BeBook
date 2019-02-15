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

// const setHeaders = () => {
//     return {
//         headers: {
//             autorization: getToken(),
//         },
//     };
// };

export const login = (data, callback) => {
    axios.post("http://localhost/api/login", data).then(response => {
        storeToken(response.data.token);
        return callback();
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

    return !!token && !isTokenValid(token);
};

// export const getUsers = () => {
//     axios
//         .get("http://localhost/api/coaches/users", {
//             headers: {
//                 autorization:
//                     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjNjNkNDgxZTAwYjZhMDAzYzY2N2JjMSIsInJvbGUiOiJjb2FjaCIsImZpcnN0TmFtZSI6IkNvYWNoU3VwcmVtZSIsImxhc3RuYW1lIjoiSG9tZXIiLCJhdmF0YXIiOiIvL3d3dy5ncmF2YXRhci5jb20vYXZhdGFyL2Y3MGIxZDE1ZDU4NTU5NDhiZDc0ZDkzZGQ0ZDRlZGU3P3M9MjAwJnI9cGcmZD1tbSIsImlhdCI6MTU1MDIyMDEyOCwiZXhwIjoxNTUwODI0OTI4fQ.FCPnH_b4s93BdqjyHfLHEe8gceyf0EJvK1G45aEkyYw",
//             },
//         })
//         .then(data => {
//             console.log(data);
//         })
//         .catch(error => {
//             console.log(error);
//         });
// };
