import { Button, Text, TextInput, View } from "react-native";

const Askname = () => {
  return (
    <View
      style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}
    >
      <Text>Enter your name</Text>
      <TextInput
        style={{ flex: 1, marginHorizontal: 10, borderBottomWidth: 1 }}
      />
      <Button title="OK" />
    </View>
  );
};

const Index = () => {
  return (
    <View style={{ padding: 10 }}>
      <Askname />
      <Askname />
    </View>
  );
};

export default Index;
