import React from "react";
import { Button, View, Text } from "react-native";
import Counter from "../components/Counter";

const CounterScreen = ({ navigation }) => {

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Counter Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate("Home")}
      />
      <Counter />
    </View>
  );
};

export default CounterScreen;
