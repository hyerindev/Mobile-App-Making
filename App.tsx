import { Text, View, Image } from "react-native";

const ICONS = {
  cat1: require("./assets/cat-icon.png"),
  cat2: { uri: "https://reactnative.dev/docs/assets/p_cat2.png" },
};

const App = () => {
  return (
    <View style={{ paddingTop: 30 }}>
      <Text style={{ fontSize: 40, borderColor: "red", borderWidth: 1, padding: 20 }}>Hello Ewha</Text>
      <Text style={{ fontSize: 20, borderColor: "red", borderWidth: 1, padding: 20 }}>Nice to meet you</Text>
      <Text style={{ fontSize: 30, borderColor: "red", borderWidth: 1, padding: 20 }}>Nice to meet you</Text>
      <Image style={{ width: 200, height: 200, borderColor: "red", borderWidth: 1 }} source={ICONS["cat1"]} />
    </View>
  );
};

export default App;
