import { StatusBar } from "expo-status-bar";
import React, { useReducer } from "react";

import { reducer, initialState } from "./reducer";

import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { text, result, textArray } = state;
  const onChange = (text) => dispatch({ type: "SET_TEXT", text });

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ backgroundColor: "powderblue" }}>
        <Text>Saisir une phrase ci-desous:</Text>
      </View>
      <View style={{ backgroundColor: "powderblue" }}>
        <TextInput style={styles.input} onChangeText={onChange} value={text} />
        {text !== "" && (
          <View style={{ display: "flex", justifyContent: "center", flexDirection : "row"}}>
            { textArray.map((t, i) => <Text key={i} style={{color : t.length % 2 === 0 ? "red" : "black", marginLeft : 5 }}>{t}</Text>)}
          </View>
        )}
      </View>

      {result !== "" && <Text>{result}</Text>}
      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch({ type: "CLEAN" })}
      >
        <Text>Clean</Text>
      </TouchableOpacity>
      {text !== "" && (
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch({ type: "REVERSE" })}
        >
          <Text>Reverse</Text>
        </TouchableOpacity>
      )}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
});
