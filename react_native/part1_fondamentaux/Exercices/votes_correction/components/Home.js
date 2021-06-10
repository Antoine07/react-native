import React from "react";
import Styles from "../Styles";
import { useSelector, useDispatch } from "react-redux";
import {
  Text,
  StatusBar,
  SafeAreaView,
  FlatList,
  Pressable,
  View,
} from "react-native";

import { Button, Headline } from 'react-native-paper';

import Favorite from "./Favorite";

import {
  objectToValues,
  set_choice,
  set_rating,
} from "../actions/actions-types";

/*
Attention pour les Hooks il ne faut pas les appeler dans des fonctions ou boucle, par contre vous pouvez passer une référence
au dispatch crée dans le composant Home
*/
const OnSelect = ({ candidate, dispatch }) => {
  return (
    <>
        <Headline >Rating</Headline>
      {[...Array(10).keys()].map((num, i) => (
        <Pressable
          onPressIn={() => dispatch(set_rating({ num : (num + 1), candidate }))}
          key={i}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
            },
            Styles.wrapperCustom,
          ]}
        >
          {({ pressed }) =>
            pressed ? (
              <Text style={Styles.textPress}>{num + 1}</Text>
            ) : (
              <Text style={Styles.text}>{num + 1}</Text>
            )
          }
        </Pressable>
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
        <FlatList
          data={objectToValues(candidates[count])}
          renderItem={({ item, index }) => (
            <View>
              <Button
                style={item.rating ?  Styles.btn : Styles.btnDistable }
                onPress={() => dispatch(set_choice({name : item.name, rating : item.rating}))}
                disabled={item.rating ? false : true}
                icon="circle"
              >
                <Text style={Styles.btnLabel}>{item.name} {item.rating ?? "no rating"}</Text>
              </Button>
              {OnSelect({ candidate : item.name, dispatch })}
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
        <StatusBar style="auto" />
      </SafeAreaView>
    );

  return <Favorite />;
};

export default Home;
