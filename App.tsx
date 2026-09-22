import { useState } from "react";
import { Text, View, Button } from "react-native";

var text_st = {
  fontSize: 30,
  backgroundColor: "lightgray",
  padding: 10,
  margin: 10,
};

const App = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  return (
    <View style={{ paddingTop: 30, flexDirection: "row", gap: 20 }}>
      <View style={{ gap: 20 }}>
        <Text style={text_st}>{a}</Text>
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
      <View style={{ gap: 20 }}>
        <Text style={text_st}>{b}</Text>
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
    </View>
  );
};

export default App;
