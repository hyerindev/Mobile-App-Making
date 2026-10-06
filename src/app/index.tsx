import type { ViewStyle } from "react-native";
import { View } from "react-native";

const pianoStyle: ViewStyle = {
  flex: 1,
  margin: 5,
  backgroundColor: "rgba(100,100,100)",
};

const Index = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={pianoStyle} />
      <View style={pianoStyle} />
      <View style={pianoStyle} />
      <View style={pianoStyle} />
      <View style={pianoStyle} />
      <View style={pianoStyle} />
      <View style={pianoStyle} />
      <View style={pianoStyle} />
    </View>
  );
};

export default Index;
