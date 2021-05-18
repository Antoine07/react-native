
// source de vérité
const stateInit = {
    numbers : [1, 2, 8, 7 ]
}

// algo
const reducer = (state = stateInit, action ) =>{

    switch(action.type){

        case "SHUFFLE":

            return {
                ...state,
                
            }


        default: 
            return state;
    }
}

export default reducer;