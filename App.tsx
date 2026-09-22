import type { TextStyle } from "react-native";
import { useState } from "react";
import { View, Text, TextInput } from "react-native";

const commonStyle: TextStyle = {
  margin: 10,
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
  const [name, setName] = useState<string>("");

  return (
    <View style={{ paddingTop: 30 }}>
      <Text style={textStyle}>Hello, {name}</Text>
      <TextInput style={inputStyle} onChangeText={setName} />
      <Text style={{ fontSize: 12, margin: 10 }}>글자 수: {("Hello, " + name).length}</Text>
    </View>
  );
};

export default App;
