import type { TextStyle } from "react-native";
import { useState } from "react";
import { View, Text, Button } from "react-native";

const textStyle: TextStyle = {
  padding: 10,
  backgroundColor: "lightgray",
  fontSize: 30,
};

const App = () => {
  const [val, setVal] = useState<number>(0);

  return (
    <View style={{ padding: 12, paddingTop: 36, gap: 20 }}>
      <Text style={textStyle}>{val}</Text>
      <View style={{ gap: 8 }}>
        <Button title="+1" onPress={() => setVal((prev) => prev + 1)} />
        <Button title="-1" onPress={() => setVal((prev) => prev - 1)} />
      </View>
      <View style={{ gap: 8 }}>
        <Button title="+5" onPress={() => setVal((prev) => prev + 5)} />
        <Button title="-5" onPress={() => setVal((prev) => prev - 5)} />
      </View>
    </View>
  );
};

export default App;
