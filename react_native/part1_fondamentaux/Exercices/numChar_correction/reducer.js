export const initialState = {
  text: "",
  result: [],
  textArray : []
};

// <Text style={styles.red}>Bonjour</Text> tout <Text style={styles.red}>le</Text>

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TEXT":
    case "RESULT":
      const { text } = action;

      const result = text
        .split(" ")
        .reduce(
          (acc, curr) => (curr.length === 0 ? acc : acc.concat(curr.length)),
          []
        ).join(" ");

      return {
        ...state,
        text: text,
        result: result, 
        textArray : text.split(" ") // tableau
      };

    case "CLEAN":
      return {
        ...state,
        text: "",
        result: "0",
      };

    case "REVERSE":

      return {
        ...state,
        text: state.text.split("").reverse().join(""),
      };
  }
};
