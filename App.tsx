import type { TextStyle } from "react-native";
import { useState } from "react";
import { View, Text, Button } from "react-native";

const textStyle: TextStyle = {
  padding: 10,
  backgroundColor: "lightgray",
};

const App = () => {
  const [fontSize, setFontSize] = useState<number>(24);

  return (
    <View style={{ padding: 12, paddingTop: 36, gap: 20 }}>
      <Text style={{ ...textStyle, fontSize: fontSize }}>Using State in Style!</Text>
      <View style={{ gap: 8 }}>
        <Button title="+1" onPress={() => setFontSize((prev) => prev + 1)} />
        <Button title="-1" onPress={() => setFontSize((prev) => prev - 1)} />
      </View>
    </View>
  );
};

export default App;
