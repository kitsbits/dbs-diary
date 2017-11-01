import axios from "axios";
let url = "http://localhost:10100/shitlist"

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
