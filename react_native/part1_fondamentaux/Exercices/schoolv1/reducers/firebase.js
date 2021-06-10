import {
    AUTH
} from "../constants/actions";

const stateInit = {
    isAuth : false
}

const reducer = (state = stateInit, action = {}) => {

    switch (action.type) {

        case AUTH:

            return {
                ...state,
                isAuth : action.payload
            }

        default:
            return state;
    }
}

export default reducer;