import type { TextStyle } from "react-native";
import { useState } from "react";
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
  const [val, setVal] = useState<number>(0);
  const [nb, setNb] = useState<number>(0);

  return (
    <View style={{ padding: 12, paddingTop: 36, gap: 16 }}>
      <Text style={textStyle}>{val}</Text>
      <TextInput
        style={inputStyle}
        onChangeText={(input) => {
          setNb(Number(input));
        }}
      />
      <Button
        title="PLUS"
        onPress={() => {
          setVal(val + nb);
        }}
      />
    </View>
  );
};

export default App;
