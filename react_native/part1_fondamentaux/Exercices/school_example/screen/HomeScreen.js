import React from 'react';
import { Button, View, Text } from 'react-native';

const HomeScreen = ({ navigation })  => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Counter"
        onPress={() => navigation.navigate('Counter')}
      />
    </View>
  );
}

export default HomeScreen;