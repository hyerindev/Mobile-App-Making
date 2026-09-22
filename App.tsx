import { useState } from "react";
import { TextStyle, Text, View, Button } from "react-native";

const text_var: TextStyle = {
  padding: 10,
  backgroundColor: "lightgray",
  fontSize: 30,
};

const App = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  return (
    <View style={{ overflow: "visible", paddingTop: 30, gap: 20 }}>
      <Text style={text_var}>
        {a} × {b} ＝ {a * b}
      </Text>
      <View style={{ flexDirection: "row", gap: 20 }}>
        <View style={{ width: 50, gap: 20 }}>
          <Button
            title="+"
            onPress={() => {
              setA((prev) => prev + 1);
            }}
          />
          <Button
            title="-"
            onPress={() => {
              setA((prev) => prev - 1);
            }}
          />
        </View>
        <View style={{ width: 50, gap: 20 }}>
          <Button
            title="+"
            onPress={() => {
              setB((prev) => prev + 1);
            }}
          />
          <Button
            title="-"
            onPress={() => {
              setB((prev) => prev - 1);
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default App;
