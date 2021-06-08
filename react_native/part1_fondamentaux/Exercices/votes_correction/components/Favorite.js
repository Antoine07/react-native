import Styles from "../Styles";

import React from "react";

import { Text, View, FlatList, SafeAreaView, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { reset } from "../actions/actions-types";

const Favorite = (props) => {
  const { choices } = useSelector((state) => state.vote);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={Styles.container}>
      <FlatList
        data={choices}
        renderItem={({ item, index }) => {
          return (
            <Text
              style={{
                width: 200,
                color: "tomato",
                margin: 5,
                padding: 10,
                backgroundColor: "navy",
              }}
            >
              {item.choice}
            </Text>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />
      <TouchableOpacity
        style={Styles.btn}
        onPress={() => dispatch(reset())}
      >
        <Text style={{ color : "orange", fontSize: 20}}>Reset</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Favorite;
