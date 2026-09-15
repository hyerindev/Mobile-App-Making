import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

const iconCat = require("./assets/cat-icon.png");

const App = () => {
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "cyan" }}>
        <Text style={{ fontSize: 30 }}>Hello Ewha</Text>
        <Text style={{ fontSize: 24, color: "blue" }}>Nice to meet you</Text>
        <StatusBar style="auto" />
      </View>
      <Image style={{ width: 200, height: 200 }} source={iconCat} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
