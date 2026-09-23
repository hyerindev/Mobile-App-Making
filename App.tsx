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
  const [a, setA] = useState<number>(0);
  const [b, setB] = useState<number>(0);

  return (
    <View style={{ flexDirection: "row", gap: 20, paddingTop: 30 }}>
      <View style={{ gap: 20 }}>
        <Text style={textStyle}>{a}</Text>
        <Button title="+" onPress={() => setA((prev) => prev + 1)} />
        <Button title="-" onPress={() => setA((prev) => prev - 1)} />
      </View>
      <View style={{ gap: 20 }}>
        <Text style={textStyle}>{b}</Text>
        <Button title="+" onPress={() => setB((prev) => prev + 1)} />
        <Button title="-" onPress={() => setB((prev) => prev - 1)} />
      </View>
    </View>
  );
};

export default App;
