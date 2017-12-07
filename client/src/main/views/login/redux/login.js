// ACTIONS \\
import axios from "axios";
const authUrl = "/auth/";

// include token in axios requests
axios.interceptors.request.use(config => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

// HELPERS \\
function logon(success, user) {
    return {type: "LOGON", success, user}
}

function handleAuthErr(key, errCode) {
    return {type: "HANDLE_AUTH_ERR", key, errCode}
}
///////////////////////////////////

export function signup(credentials, history) {
    return dispatch => {
        axios.post(authUrl + "signup", credentials).then(response => {
            const {token, user, success} = response.data;
            localStorage.setItem("token", token);
            dispatch(logon(success, user));
            history.push("/");
        }).catch(err => {
            console.log(err);
            dispatch(handleAuthErr("signup", err.response.status));
        });
    }
}

export function signin(credentials, history) {
    return dispatch => {
        axios.post(authUrl + "login", credentials).then(response => {
            const {token, success, user} = response.data;
            localStorage.setItem("token", token);
            dispatch(logon(success, user));
            history.push("/");
        }).catch(err => {
            console.log(err);
            dispatch(handleAuthErr("signin", err.response.status));
        })
    }
}

export function verify() {
    return (dispatch) => {
        axios.get("/journal/verify")
        .then(response => {
            const {success, user} = response.data;
            dispatch(logon(success, user));
            // history.push(pathname);
        })
        .catch(err => {
            console.error(err);
        })
    }
}

export function logout() {
    localStorage.removeItem("token");
    return {
        type: "LOGOUT"
    }
}

// STATE \\
const state = {
    user: {
        username: "",
        admin: false,
        _id: ""
    },
    authErrCode: {
        signup: "",
        signin: ""
    },
    isAuthenticated: false
}

// REDUCER \\
export default function login(prevState = state, action) {
    switch (action.type) {
        case "LOGON":
            return {
                ...prevState,
                user: action.user,
                isAuthenticated: action.success,
                authErrCode: {
                    signup: "",
                    signin: ""
                }
            };
        case "LOGOUT":
            return state;
        case "HANDLE_AUTH_ERR":
            return {
                ...prevState,
                authErrCode: {
                    [action.key]: action.errCode
                }
            };
        default:
            return {
                ...prevState
            }
    }
}
