import { ADD_NUMBER, MESSAGE } from "../constantes/actions";

const stateInit = {
    count : 0,
    countA : 0,
    message : []
};

const reducer =  (state = stateInit, action = {}) => {
    switch(action.type){
        case  ADD_NUMBER:
          
            return { 
                ...state, 
                count : state.count + 1
            };

        case MESSAGE:
            const { message } = action ;
            return {
                ...state,
                message : state.message.concat(message)
            }


        default:
            return state;
    }

}

export default reducer;
