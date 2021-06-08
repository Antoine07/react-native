
import { CHOICE, RESET } from "../constants/actions";

export const objectToValues = object => Object.values(object);

export const set_choice = payload => ({type : CHOICE , payload });

export const reset = () => ({type : RESET  });
