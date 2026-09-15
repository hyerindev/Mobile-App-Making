import { Text, View, Image, TextInput } from "react-native";

const ICONS = {
  cat1: require("./assets/cat-icon.png"),
  cat2: { uri: "https://reactnative.dev/docs/assets/p_cat2.png" },
};

const App = () => {
  return (
    <View style={{ paddingTop: 30 }}>
      <Text style={{ fontSize: 40, color: "blue" }}>Hello Ewha</Text>
      <Text>Nice to meet you</Text>
      <Text style={{ fontSize: 20 }}>Nice to meet you</Text>
      <Text style={{ fontSize: 30 }}>Nice to meet you</Text>
      <Image style={{ width: 200, height: 200 }} source={ICONS["cat1"]} />
      <Image style={{ width: 200, height: 200 }} source={ICONS["cat2"]} />
      <TextInput style={{ height: 40, borderColor: "gray", borderWidth: 1 }} defaultValue="You can type in me" />
    </View>
  );
};

export default App;
