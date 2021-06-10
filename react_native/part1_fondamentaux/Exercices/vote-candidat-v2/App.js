import React, { useReducer } from 'react';
import { 
  Text, 
  View, 
  TouchableOpacity, 
  SafeAreaView 
} from 'react-native';

import Favorite from './components/Favorite';
import { reducer, initialState } from './reducers/candidate';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, candidates } = state;

  if (count < candidates.length) {
    const { choice_1 : c1, choice_2: c2 } = candidates[count];
    return (
      <SafeAreaView style={styles.container}>
        <View style={{ marginTop: 50 }}>
          <TouchableOpacity onPress={() => dispatch({ type: 'CHOICE_1', choice : c1 })} >
            <Text style={styles.btnStyle}>
              {choice_1}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => dispatch({ type: 'CHOICE_2', choice : c2 })} >
            <Text style={styles.btnStyle}>
              {choice_2}
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <Favorite
      {...state}
      reset={() => dispatch({ type: 'RESET' })}
    />
  );
}

export default App;