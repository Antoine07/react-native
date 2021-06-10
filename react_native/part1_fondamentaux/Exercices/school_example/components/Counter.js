import React, { useState, useEffect } from "react";
import { Button, View, Text } from "react-native";

const Counter = (props) => {
  const [count, setCount] = useState(0);

  const start = () => {
    setCount(count + 1);
  };

  useEffect(() => {
      if(count > 0)
        setTimeout(() => setCount(count + 1), 1000);
  }, [count]);

  return (
    <View>
      <Text>Counter</Text>
      {count > 0 && (<Text>{count}</Text>)}
      <Button title="Start" onPress={start} />
    </View>
  );
};

export default Counter;
