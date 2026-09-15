import { useState } from "react";
import { Text, View, Button } from "react-native";

var text_st = {
  fontSize: 30,
  backgroundColor: "lightgray",
  padding: 10,
  margin: 10,
};

const App = () => {
  const [val, setVal] = useState(0);

  return (
    <View style={{ paddingTop: 30 }}>
      <Text style={text_st}>{val}</Text>
      <Button
        title="Count Up"
        onPress={function () {
          setVal(1);
        }}
      />
      <View style={{ height: 10 }}></View>
      <Button
        title="Count Down"
        onPress={function () {
          setVal(2);
        }}
      />
    </View>
  );
};

export default App;
