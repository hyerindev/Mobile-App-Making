import { useState } from "react";
import { Text, View, Button } from "react-native";

var head_st = {
  fontSize: 40,
  color: "blue",
  backgroundColor: "orange",
  padding: 10,
  margin: 10,
};
var text_st = {
  fontSize: 30,
  backgroundColor: "lightgray",
  padding: 10,
  margin: 10,
};

const App = () => {
  const [hello, setHello] = useState("Hello");

  function action() {
    setHello("Nice to meet you");
  }

  return (
    <View style={{ paddingTop: 30 }}>
      <Text style={head_st}>{hello}</Text>
      <Text style={text_st}>{hello}</Text>
      <Text style={text_st}>{hello}</Text>
      <Button
        title="Press Me"
        onPress={function () {
          setHello("Hello, Ewha");
        }}
      />
      <View style={{ height: 10 }}></View>
      <Button title="Touch Me" onPress={action} />
    </View>
  );
};

export default App;
