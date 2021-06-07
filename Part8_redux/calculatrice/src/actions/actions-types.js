
import { SHUFFLE, SET_NUMBER, MULTIPLICATION, ADD, RESET } from "../constants/actions";

export const change = payload => {

    return { type: SET_NUMBER, payload };
}

export const show = () => {

    return { type: SHUFFLE };
}

export const add = () => {

    return { type: ADD };
}

export const mult = () => {

    return { type: MULTIPLICATION };
}

export const reset = () => {

    return { type: RESET };
}