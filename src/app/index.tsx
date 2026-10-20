import { Button, Text, TextInput, View } from "react-native";

const Index = () => {
  return (
    <View style={{ padding: 10 }}>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}
      >
        <Text>Enter your name</Text>
        <TextInput
          style={{ flex: 1, marginHorizontal: 10, borderBottomWidth: 1 }}
        />
        <Button title="OK" />{/* titleStyle 속성은 존재하지 않는다. */}
      </View>
    </View>
  );
};

export default Index;
