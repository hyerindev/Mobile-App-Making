import type { ViewStyle } from "react-native";
import { ImageBackground, View } from "react-native";

const IMAGE = {
  keyboard: require("@/assets/keyboard.png"),
};
const pianoStyle: ViewStyle = {
  flex: 1,
  margin: 5,
  backgroundColor: "rgba(100, 100, 100, 0.3)",
};

const Index = () => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground style={{ width: "100%", height: "100%" }} resizeMode="stretch" source={IMAGE["keyboard"]}>
        <View style={pianoStyle} />
        <View style={pianoStyle} />
        <View style={pianoStyle} />
        <View style={pianoStyle} />
        <View style={pianoStyle} />
        <View style={pianoStyle} />
        <View style={pianoStyle} />
        <View style={pianoStyle} />
      </ImageBackground>
    </View>
  );
};

export default Index;
