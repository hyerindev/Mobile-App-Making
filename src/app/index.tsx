import { Text, View } from "react-native";

const Index = () => {
  return (
    <View style={{ borderWidth: 1 }}>
      <View style={{ flex: 1, backgroundColor: "red" }} />
      <View style={{ flex: 2, backgroundColor: "yellow" }} />
      <View style={{ flex: 3, backgroundColor: "green" }} />
      <Text style={{ fontSize: 50 }}>ABC</Text>
      <Text style={{ fontSize: 80 }}>ABC</Text>
    </View>
  );
};

export default Index;
