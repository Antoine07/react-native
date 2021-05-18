
// source de vérité
const stateInit = {
    
}

// algo
const reducer = (state = stateInit, action ) =>{

    switch(action.type){

        case "ADD":

            return {
                ...state,
                
            }


        default: 
            return state;
    }
}

export default reducer;