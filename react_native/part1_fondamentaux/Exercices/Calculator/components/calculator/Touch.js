import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity,  Dimensions } from 'react-native';

const Btn =  ({ onPressCalcul, value, color }) => {

  return (
    <TouchableOpacity 
      style={[styles.container, { backgroundColor : color}]}
      onPress = { () => onPressCalcul(value) }
    >
      <Text style={styles.text} >
        {value}
      </Text>
    </TouchableOpacity>
  );
}

export default Btn;

const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;

const styles = StyleSheet.create({
  container : {
    height: Math.floor(buttonWidth - 15),
    width: Math.floor(buttonWidth - 15),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Math.floor(buttonWidth),
    margin: 7,
  },
  text : {
    fontSize : 30,
    fontWeight : "bold"
  }
});
