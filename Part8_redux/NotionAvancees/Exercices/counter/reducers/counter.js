import { ADD_NUMBER } from "../constantes/actions";

const stateInit = {
    count : 0
};

const reducer =  (state = stateInit, action = {}) => {

    // gestion des actions du Reducer
    switch(action.type){
        case  ADD_NUMBER:
          
            return { 
                ...state, 
                count : state.count + 1
            };

        default:
            return state;
    }

}

export default reducer;
