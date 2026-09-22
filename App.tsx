import { useState } from "react";
import { TextStyle, Text, View, Button } from "react-native";

const text_var: TextStyle = {
  padding: 10,
  textAlign: "center",
  backgroundColor: "lightgray",
  fontSize: 30,
};
const text_static: TextStyle = {
  padding: 10,
  fontSize: 30,
};

const App = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  return (
    <View style={{ overflow: "visible", paddingTop: 30, flexDirection: "row", gap: 5 }}>
      <View style={{ overflow: "visible", width: 80, gap: 20 }}>
        <Text style={text_var}>{a}</Text>
        <Button
          title="+"
          onPress={function () {
            setA((prev) => prev + 1);
          }}
        />
        <Button
          title="-"
          onPress={function () {
            setA((prev) => prev - 1);
          }}
        />
      </View>
      <Text style={text_static}>×</Text>
      <View style={{ overflow: "visible", width: 80, gap: 20 }}>
        <Text style={text_var}>{b}</Text>
        <Button
          title="+"
          onPress={function () {
            setB((prev) => prev + 1);
          }}
        />
        <Button
          title="-"
          onPress={function () {
            setB((prev) => prev - 1);
          }}
        />
      </View>
      <Text style={text_static}>＝</Text>
      <Text style={{ ...text_var, height: 60 }}>{a * b}</Text>
    </View>
  );
};

export default App;
