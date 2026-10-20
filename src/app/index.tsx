import { Button, Text, View } from "react-native";

const Index = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
        alignItems: "flex-start",
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
