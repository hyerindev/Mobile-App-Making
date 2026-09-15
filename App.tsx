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
var hello = "Hello";

function action() {
  hello = "Nice to meet you";
}

const App = () => {
  return (
    <View style={{ paddingTop: 30 }}>
      <Text style={head_st}>{hello}</Text>
      <Text style={text_st}>{hello}</Text>
      <Text style={text_st}>{hello}</Text>
      <Button
        title="Press Me"
        onPress={function () {
          hello = "Hello, Ewha";
        }}
      />
      <View style={{ height: 10 }}></View>
      <Button title="Touch Me" onPress={action} />
    </View>
  );
};

export default App;
