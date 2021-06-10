import { CHOICE, RESET, RATING } from "../constants/actions";

// source de vérité ne doit pas être altérée
const stateInit = {
  candidates: [
    {
      choice_1: { name: "Alan", rating: null },
      choice_2: { name: "Juliette", rating: null },
    }, // count = 0
    {
      choice_1: { name: "Phi", rating: null },
      choice_2: { name: "Bernard", rating: null },
    }, // count = 1
    {
      choice_1: { name: "Lisa", rating: null },
      choice_2: { name: "Elise", rating: null },
    }, // count = 2
    {
      choice_1: { name: "Lison", rating: null },
      choice_2: { name: "Pauline", rating: null },
    }, // count = 3
  ],
  count: 0,
  choices: [],
  max: 4,
};

// algo
const reducer = (state = stateInit, action) => {
  switch (action.type) {
    case CHOICE:
      const {name, rating} = action.payload;

      return {
        ...state,
        choices: state.choices.concat({ name, rating, id: state.count + 1 }), // concat un nouveau tableau
        count: state.count + 1,
      };

    case RATING:
      const { num, candidate: n } = action.payload;

      // on travaille toujours sur une copie par rapport à la source de vérité
      // on copie donc chacune des références
      const candidates = state.candidates
        .map((c) => ({
          choice_1: { ...c.choice_1 },
          choice_2: { ...c.choice_2 },
        }))
        .map((candidate) => {
          const { choice_1, choice_2 } = candidate;

          if (choice_1.name === n) {
            choice_1.rating = num;
            choice_2.rating = null;
          }
          if (choice_2.name === n) {
            choice_2.rating = num;
            choice_1.rating = null;
          }

          return candidate;
        });

      return {
        ...state,
        candidates
      };

    case RESET:
      return {
        ...state,
        ...stateInit,
      };

    default:
      return state;
  }
};

export default reducer;
