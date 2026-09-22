import type { TextStyle } from "react-native";
import { useState, useRef } from "react";
import { View, Text, TextInput, Button } from "react-native";

const commonStyle: TextStyle = {
  padding: 10,
  fontSize: 24,
};
const textStyle: TextStyle = {
  ...commonStyle,
  backgroundColor: "lightgray",
};
const inputStyle: TextStyle = {
  ...commonStyle,
  borderWidth: 1,
};

const App = () => {
  const formRef = useRef<number>(0);
  const [total, setTotal] = useState<number>(0);

  return (
    <View style={{ padding: 12, paddingTop: 36, gap: 16 }}>
      <Text style={textStyle}>{total}</Text>
      <TextInput style={inputStyle} onChangeText={(input) => (formRef.current = Number(input))} />
      <Button title="PLUS" onPress={() => setTotal((prev) => prev + formRef.current)} />
    </View>
  );
};

export default App;
