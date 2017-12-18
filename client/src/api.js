/// not yet implemented

import axios from "axios";

const baseUrl = "/journal/"

export function deleteEntry(id) {
    return axios.delete(baseUrl + id);
}
