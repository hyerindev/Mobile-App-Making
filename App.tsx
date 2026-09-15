import { Text, View, Image } from "react-native";

const ICONS = {
  cat1: require("./assets/cat-icon.png"),
  cat2: { uri: "https://reactnative.dev/docs/assets/p_cat2.png" },
};

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
var hello = "Nice to meet you";

const App = () => {
  return (
    <View style={{ paddingTop: 30 }}>
      <Text style={head_st}>Hello Ewha</Text>
      <Text style={text_st}>{hello}</Text>
      <Text style={text_st}>{hello}</Text>
      <Image style={{ width: 200, height: 200 }} source={ICONS["cat1"]} />
    </View>
  );
};

export default App;
