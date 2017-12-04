// ACTIONS \\
import axios from "axios";
const url = "https://dbs-diary.herokuapp.com/journal/";

// include token in axios requests
axios.interceptors.request.use(config => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

export function saveEntry(id, entry) {
    return (dispatch) => {
        axios.put(url + id, entry).then(response => {
            dispatch({type: "SAVE_ENTRY", savedEntry: response.data})
        }).catch(err => {
            console.log(err);
        });
    };
}

export function startEntry(entry) {
    return (dispatch) => {
        axios.post(url, entry).then(response => {
            dispatch({type: "START_ENTRY", startedEntry: response.data});
        }).catch(err => {
            console.log(err);
        });
    }
}

export function deleteEntry(id) {
    return (dispatch) => {
        axios.delete(url + id).then(response => {
            dispatch({type: "DELETE_ENTRY", id});
        }).catch(err => {
            console.log(err);
        });
    }
}

export function getEntries(url, pathname) {
    return (dispatch) => {
        axios.get(url+pathname).then(response => {
            dispatch({
                type: "GET_ENTRIES",
                entries: response.data
            })
        }).catch(err => {
            console.log(err);
        })
    }
}

// STATE \\
const state = {
   entries: []
}


// REDUCER ||
export default function journal(prevState = state, action) {
   let newEntries = [...prevState.entries];
   switch(action.type) {
        case "SAVE_ENTRY":
            return {
                ...prevState,
                journalEntry: action.savedEntry
            };
        case "DELETE_ENTRY":
            return {
                ...prevState,
                entries: newEntries.filter(entry => entry._id !== action.id)
            };
        case "GET_ENTRIES":
            return {
                ...prevState,
                entries: action.entries
            };
       default:
           return prevState;
   }
}
