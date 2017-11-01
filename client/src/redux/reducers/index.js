 // REDUCERS \\
const state = {
    shitList: [],
    journal: []
}

export default function reducer(prevState = state, action) {
    switch(action.type) {
        case "LOAD_LIST":
            return {
                ...prevState,
                shitList: action.list
            }

        default:
            return prevState;
    }
}
