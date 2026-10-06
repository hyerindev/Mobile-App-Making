import { View } from "react-native";

const Index = () => {
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <View style={{ flex: 1, height: 100, backgroundColor: "red" }} />
      <View style={{ flex: 2, height: 100, backgroundColor: "yellow" }} />
      <View style={{ flex: 3, height: 100, backgroundColor: "green" }} />
    </View>
  );
};

export default Index;
