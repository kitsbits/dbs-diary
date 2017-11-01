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
           newShits.filter(shit => shit._id !== action.id);
           return {
               ...prevState,
               shitList: newShits
           };

       case "EDIT_SHIT":
           newShits.map(shit => {
               if (shit._id === action.id) {
                   return action.edited;
               } else {
                   return shit;
               }
           });

       default:
           return prevState;
   }
}
