import { Button, Text, TextInput, View } from "react-native";

const Ask = (props) => {
  return (
    <View
      style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}
    >
      <Text>Enter your {props.thing}</Text>
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
      <Ask thing="name" />
      <Ask thing="age" />
    </View>
  );
};

export default Index;
