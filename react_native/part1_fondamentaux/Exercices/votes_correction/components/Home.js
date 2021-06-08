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
  Alert,
} from "react-native";

import Favorite from "./Favorite";

import { objectToValues, set_choice } from "../actions/actions-types";

const OnSelect = ({ candidate }) => {

  const onSelect = (e ) => console.log(e, candidate );

  return (
    <>
      {[...Array(10).keys()].map((num, i) => (
        <TouchableOpacity onPress={() => onSelect(num + 1)} key={i}>
          <Text>{num + 1}</Text>
        </TouchableOpacity>
      ))}
    </>
  );
};

const Home = (props) => {
  const dispatch = useDispatch();

  const { vote, memory } = useSelector((state) => ({
    vote: state.vote,
    memory: state.memory,
  }));

  const { candidates, count, max } = vote;
  if (count < max)
    return (
      <SafeAreaView style={Styles.container}>
        <Text>{count + 1}</Text>
        <FlatList
          data={objectToValues(candidates[count])}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={Styles.btn}
              onPress={() => dispatch(set_choice(item))}
            >
              <Text style={Styles.btnLabel}>{item}</Text>
              {OnSelect({candidate : item })}
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
        <StatusBar style="auto" />
      </SafeAreaView>
    );

  return <Favorite />;
};

export default Home;
