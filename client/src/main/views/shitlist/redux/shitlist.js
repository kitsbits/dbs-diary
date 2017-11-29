// ACTIONS \\
import axios from "axios";
let url = "http://localhost:10100/shitlist/"

// include token in axios requests
axios.interceptors.request.use(config => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

export function getList() {
    return (dispatch) => {
        axios.get(url).then(response => {
            dispatch({
                type: "LOAD_LIST",
                list: response.data
            })
        }).catch(err => {
            console.log(err);
        });
    };
}

export function addShit(shitToAdd) {
    return (dispatch) => {
        axios.post(url, shitToAdd).then(response => {
            dispatch({
                type: "ADD_SHIT",
                added: response.data
            });
        }).catch(err => {
            console.log(err);
        });
    };
}

export function deleteShit(id) {
    return (dispatch) => {
        axios.delete(url + id).then(response => {
            dispatch({
                type: "DELETE_SHIT",
                id
            });
        }).catch(err => {
            console.log(err);
        });
    };
}

export function editShit(id, editedShit) {
    return (dispatch) => {
        axios.put(url + id, editedShit).then(response => {
            dispatch({
                type: "EDIT_SHIT",
                edited: response.data,
                id
            })
        }).catch(err => {
            console.log(err);
        });
    };
}

// STATE \\
const state = {
   shitList: []
}

// REDUCER ||
export default function list(prevState = state, action) {
    let newShits = [...prevState.shitList];
    switch(action.type) {
        case "LOAD_LIST":
            return {
                ...prevState,
                shitList: action.list
            }

        case "ADD_SHIT":
            newShits.push(action.added);
            return {
                ...prevState,
                shitList: newShits
            };

        case "DELETE_SHIT":
            return {
                ...prevState,
                shitList: newShits.filter(shit => shit._id !== action.id)
            };

        case "EDIT_SHIT":
            newShits.map(shit => {
                if (shit._id === action.id) {
                    return action.edited;
                } else {
                    return shit;
                }
            });
            break;
        default:
            return prevState;
        }
}
