// REDUCERS \\
const state = {
   shitList: [],
   entries: []
}

export default function reducer(prevState = state, action) {
   let newShits = [...prevState.shitList];
   let newEntries = [...prevState.entries];
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
