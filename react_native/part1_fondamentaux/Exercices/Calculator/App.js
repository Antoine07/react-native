import React, { useReducer } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import CalculBtn from './components/calculator/Touch';

const initialState = {
  number: 0,
  stack: [],
  memory: null,
  message: null
};

const calcul = stack => {
  let operators = [];
  let numbers = [];

  for (let elem of stack) {
    if (isNaN(elem))
      operators.push(elem);
    else
      numbers.push(elem);
  }

  // on retire éventuellement le dernier opérateur, il sera perdu
  if ((operators.length - 1) > numbers.length) operators.pop();
  if (numbers.length === 1) return { total: numbers.pop() };

  for (let operator of operators) {
    if (operator === '+') {
      let [a, b] = [numbers.shift(), numbers.shift()];
      numbers.push(a + b);
    }
    if (operator === '-') {
      let [a, b] = [numbers.shift(), numbers.shift()];
      numbers.push(a - b);
    }
    if (operator === '*') {
      let [a, b] = [numbers.shift(), numbers.shift()];
      numbers.push(a * b);
    }
    if (operator === '/') {
      let [a, b] = [numbers.shift(), numbers.shift()];
      if (b === 0) throw "Error Division by zero";
      numbers.push( Math.floor( 100 * (a / b) )  / 100);
    }
    if (operator === '%') {
      let [a, b] = [numbers.shift(), numbers.shift()];
      numbers.push(Math.floor(a * (b / 100) * 100) / 100);
    }

  }

  return { total: numbers.pop() };
};

const reducer = (state, action) => {
  switch (action.type) {

    case 'ADD_NUMBER':

      const stack = [...state.stack];

      if (stack.length > 0 && stack.pop() === '/' && action.number == 0)
        return {
          ...state,
          message: "Division by zéro 🍕🍕🍕🍕🍕"
        }

      return {
        ...state,
        number: action.number + (state.number || 0) * 10
      };

    case 'OPERATOR':

      if (typeof state.number == undefined || state.number === null )
        return state;

      if (action.operator === 'Neg')
        return {
          ...state, number: -1 * (state.number || 0)
        }
      return {
        ...state,
        stack: [ ...state.stack, state.number, action.operator],
        memory: state.number,
        number: null
      };

    case 'EVAL':

      const { total } = calcul([
        ...state.stack, state.number
      ]);

      return {
        ...state,
        memory: null,
        number: total,
        stack: []
      };

    case 'AC':

      return {
        ...state,
        ...initialState
      }

    default:
      return state;
  }
}

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState);
  const { number, memory, message } = state;

  const onPressCalcul = (number) => {

    if (number === 'AC') {
      dispatch({ type: 'AC' });

      return;
    }

    if (['+', 'x', '/', '*', 'Neg', '%', '-'].indexOf(number) != -1) {
      dispatch({ type: 'OPERATOR', operator: number });

      return;
    }

    if (number === '=') {
      dispatch({ type: 'EVAL' });

      return;
    }

    dispatch({ type: 'ADD_NUMBER', number: number })
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {message != null ?
          <Text style={styles.error} >{message}</Text> :
          <Text style={styles.result} >{number == null ? memory : number}</Text>
        }
      </View>
      <View style={styles.btnRow}>
        {["AC", "Neg", "%", "/"].map((num, k) => (
          <CalculBtn
            key={k}
            onPressCalcul={onPressCalcul}
            value={num} color={k != 3 ? "#a6a6a6" : "#f09a36"}
          />
        ))}
      </View>
      <View style={styles.btnRow}>
        {[7, 8, 9, "*"].map((num, k) => (
          <CalculBtn
            key={k}
            onPressCalcul={onPressCalcul}
            value={num}
            color={k != 3 ? "#333333" : "#f09a36"}
          />
        ))}
      </View>
      <View style={styles.btnRow}>
        {[4, 5, 6, "+"].map((num, k) => (
          <CalculBtn
            key={k}
            onPressCalcul={onPressCalcul}
            value={num}
            color={k != 3 ? "#333333" : "#f09a36"}
          />
        ))}
      </View>
      <View style={styles.btnRow}>
        {[1, 2, 3, "-"].map((num, k) => (
          <CalculBtn
            key={k}
            onPressCalcul={onPressCalcul}
            value={num}
            color={k != 3 ? "#333333" : "#f09a36"}
          />
        ))}
      </View>
      <View style={styles.btnRow}>
        {[0, "", ".", "="].map((num, k) => (
          <CalculBtn
            key={k}
            onPressCalcul={onPressCalcul}
            value={num}
            color={k != 3 ? "#333333" : "#f09a36"}
          />
        ))}
      </View>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    textAlign: 'right',
    padding: 5,
    backgroundColor: "#202020",
    color: "white"
  },
  btnRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  header: {
    height: 120,
    marginTop: 50
  },
  result: {
    color: "#fff",
    fontSize: 40,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10
  },
  equation: {
    color: "#fff",
    fontSize: 12,
    textAlign: "right",
    marginRight: 5,
    marginBottom: 5
  },
  error: {
    color: "#fff",
    fontSize: 15,
    textAlign: "right",
    marginRight: 5,
    marginBottom: 5
  }
});