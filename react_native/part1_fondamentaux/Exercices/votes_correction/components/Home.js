import React from "react";
import Styles from "../Styles";
import { useSelector, useDispatch } from "react-redux";
import {
  Text,
  View,
  StatusBar,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { Favorite } from "./Favorite";

import { objectToValues, set_choice } from "../actions/actions-types";

const Home = (props) => {
  const dispatch = useDispatch();

  const { vote, memory } = useSelector((state) => ({
    vote: state.vote,
    memory: state.memory,
  }));

  const { candidates, count, max } = vote;
  if(count < max)
    return (
      <SafeAreaView style={Styles.container}>
        <FlatList
          data={objectToValues(candidates[count])}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={Styles.btn}
              onPress={() => dispatch(set_choice(item))}
            >
              <Text style={Styles.btnLabel}>{item}</Text>
            </TouchableOpacity>
          )}
        />
        <StatusBar style="auto" />
      </SafeAreaView>
    );

  return(
    <p>Hello render</p>
  )
};

export default Home;
