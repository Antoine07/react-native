import { ADD_NUMBER, TIMER } from "../constantes/actions"

export const set_counter = () => {

    return {
        type : ADD_NUMBER
    }
}

let interval;

export const set_counter_async = () =>{

    clearInterval(interval);

    return dispatch => {
        interval = setInterval(() => dispatch(set_counter()), TIMER)
    }

}