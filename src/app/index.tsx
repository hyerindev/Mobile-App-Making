import { View } from "react-native";

const Index = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={{ width: 100, height: 100, backgroundColor: "red" }} />
      <View style={{ width: 100, height: 100, backgroundColor: "yellow" }} />
      <View style={{ width: 100, height: 100, backgroundColor: "green" }} />
    </View>
  );
};

export default Index;
