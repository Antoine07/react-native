import { CHOICE, RESET } from "../constants/actions";

// source de vérité
const stateInit = {
  candidates: [
    { choice_1: "Alan", choice_2: "Juliette" },
    { choice_1: "Phi", choice_2: "Bernard" },
    { choice_1: "Lisa", choice_2: "Elise" },
    { choice_1: "Cecilia", choice_2: "Alice" },
  ],
  count: 0,
  choices: [],
  max : 4
};

// algo
const reducer = (state = stateInit, action) => {
  switch (action.type) {
    case CHOICE:
      const choice  = action.payload;

      return {
        ...state,
        choices : state.choices.concat({choice, id : state.count + 1 }),
        count  : state.count + 1,
      };

    case RESET:
      
    return {
      ...state, 
      ...stateInit
    }

    default:
      return state;
  }
};

export default reducer;
