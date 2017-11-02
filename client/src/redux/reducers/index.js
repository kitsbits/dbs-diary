// REDUCERS \\
const state = {
   shitList: [],
   journal: []
}

export default function reducer(prevState = state, action) {
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
