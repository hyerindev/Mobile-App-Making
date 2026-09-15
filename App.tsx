import { Text, View, Image } from "react-native";

const ICONS = {
  cat1: require("./assets/cat-icon.png"),
  cat2: { uri: "https://reactnative.dev/docs/assets/p_cat2.png" },
};

const App = () => {
  return (
    <View>
      <Text>Hello Ewha</Text>
      <Text>Nice to meet you</Text>
      <Text>Nice to meet you</Text>
      <Text>Nice to meet you</Text>
      <Image style={{ width: 200, height: 200 }} source={ICONS["cat1"]} />
      <Image style={{ width: 200, height: 200 }} source={ICONS["cat2"]} />
    </View>
  );
};

export default App;
