import Styles from "../Styles";

import React from "react";

import { Text, View, FlatList, SafeAreaView, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Card, Title, Button } from 'react-native-paper';

import { reset } from "../actions/actions-types";

const Favorite = (props) => {
  const { choices } = useSelector((state) => state.vote);
  const dispatch = useDispatch();

  choices.sort( (a, b) => b.rating - a.rating );

  return (
    <SafeAreaView style={Styles.container}>
      <FlatList
        data={choices}
        renderItem={({ item, index }) => {
          return (
            <Card
              style={{
                width: 200,
                color: "tomato",
                margin: 5,
                padding: 10,
                backgroundColor: "navy",
                
              }}
            >
              <Card.Content>
                <Title style={{color: "white"}}>{item.name} : {item.rating}</Title>
              </Card.Content>
            </Card>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />
      <Button
        style={Styles.btn}
        onPress={() => dispatch(reset())}
      >
        <Text style={{ color : "orange", fontSize: 20}}>Reset</Text>
      </Button>
    </SafeAreaView>
  );
};

export default Favorite;
