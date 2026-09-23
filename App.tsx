import type { TextStyle } from "react-native";
import { useState } from "react";
import { View, Text, Button } from "react-native";

const textStyle: TextStyle = {
  margin: 10,
  padding: 10,
  backgroundColor: "lightgray",
  fontSize: 30,
};

const App = () => {
  const [total, setTotal] = useState<number>(0);

  return (
    <View style={{ paddingTop: 30 }}>
      <Text style={textStyle}>{total}</Text>
      <View style={{ gap: 10, margin: 20 }}>
        <Button title="Count Up" onPress={() => setTotal((prev) => prev + 1)} />
        <Button title="Count Down" onPress={() => setTotal((prev) => prev - 1)} />
      </View>
    </View>
  );
};

export default App;
