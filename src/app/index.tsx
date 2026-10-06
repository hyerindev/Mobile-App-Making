import { View } from "react-native";

const Index = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "red" }} />
      <View style={{ flex: 2, backgroundColor: "yellow" }} />
      <View style={{ flex: 3, width: "50%", backgroundColor: "green" }} />
    </View>
  );
};

export default Index;
