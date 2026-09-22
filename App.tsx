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
  const [step, setStep] = useState<number>(5);

  return (
    <View style={{ padding: 12, paddingTop: 36, gap: 20 }}>
      <Text style={textStyle}>{val}</Text>
      <View>
        <Text style={{ fontSize: 28, fontWeight: "bold" }}>STEP</Text>
        <TextInput style={inputStyle} onChangeText={(input) => setStep(Number(input))} />
      </View>
      <View style={{ gap: 8 }}>
        <Button title="+1" onPress={() => setVal((prev) => prev + 1)} />
        <Button title="-1" onPress={() => setVal((prev) => prev - 1)} />
      </View>
      <View style={{ gap: 8 }}>
        <Button title={"+" + step} onPress={() => setVal((prev) => prev + step)} />
        <Button title={"-" + step} onPress={() => setVal((prev) => prev - step)} />
      </View>
    </View>
  );
};

export default App;
