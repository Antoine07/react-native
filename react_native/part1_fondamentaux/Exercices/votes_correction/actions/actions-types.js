import { CHOICE, RESET, RATING } from "../constants/actions";

export const objectToValues = (candidate) => {
  const { choice_1, choice_2 } = candidate;

  return [choice_1, choice_2];
};

export const set_choice = (payload) => ({ type: CHOICE, payload });
export const set_rating = (payload) => ({ type: RATING, payload });

export const reset = () => ({ type: RESET });
