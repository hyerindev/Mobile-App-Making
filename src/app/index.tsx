import { Button, Text, View } from "react-native";

const Index = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 30, backgroundColor: "cyan" }}>ABC</Text>
      <Text style={{ fontSize: 40, backgroundColor: "yellow" }}>ABC</Text>
      <Text style={{ fontSize: 50, backgroundColor: "lightgreen" }}>ABC</Text>
      <Button title="Touch Me" />
    </View>
  );
};

export default Index;
