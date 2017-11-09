import axios from "axios";

const baseUrl = "http://localhost:10100/journal/"

export function deleteEntry(id) {
    return axios.delete(baseUrl + id);
}
